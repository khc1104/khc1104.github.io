import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lang = process.argv[2] === 'ja' ? 'ja' : 'ko';
const port = 4399;
const pageUrl = `http://127.0.0.1:${port}/${lang}/print/`;
const outDir = path.join(root, 'export');
const outFile = path.join(outDir, `portfolio-${lang}.pdf`);

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited ${code}`));
    });
  });
}

async function waitFor(url) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Preview is still starting.
    }
    await delay(250);
  }
  throw new Error(`Print page did not respond: ${url}`);
}

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));
if (!chrome) {
  throw new Error('Chrome, Chromium, or Edge is required to export the PDF.');
}

const astro = path.join(root, 'node_modules/.bin/astro');
if (!existsSync(astro)) {
  throw new Error('Run npm install before npm run pdf.');
}

await run(astro, ['build']);
await mkdir(outDir, { recursive: true });

const preview = spawn(astro, ['preview', '--host', '127.0.0.1', '--port', String(port)], {
  cwd: root,
  stdio: 'inherit',
});

try {
  await waitFor(pageUrl);
  await run(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-pdf-header-footer',
    '--hide-scrollbars',
    '--window-size=700,1123',
    `--print-to-pdf=${outFile}`,
    pageUrl,
  ]);
  console.log(outFile);
} finally {
  preview.kill('SIGTERM');
}

#!/usr/bin/env node
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function parseArgs(argv) {
  const opts = {
    lang: 'ko',
    preset: '',
    detail: null,
    summary: null,
    profile: true,
    out: 'portfolio.pdf',
    skipBuild: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--lang' && next) { opts.lang = next; i += 1; }
    else if (arg === '--preset' && next) { opts.preset = next; i += 1; }
    else if (arg === '--detail' && next !== undefined) { opts.detail = next; i += 1; }
    else if (arg === '--summary' && next !== undefined) { opts.summary = next; i += 1; }
    else if (arg === '--out' && next) { opts.out = next; i += 1; }
    else if (arg === '--no-profile') opts.profile = false;
    else if (arg === '--skip-build') opts.skipBuild = true;
  }

  return opts;
}

function printHelp() {
  console.log(`Usage: npm run pdf -- [options]

Options:
  --lang <ko|ja>              Language (default: ko)
  --preset <ios|ssafy|featured|all>
                              Preset combination (default: ios)
  --detail <slug1,slug2>      Comma-separated projects to render in full detail
  --summary <slug1,slug2>     Comma-separated projects to group in summary sheets
  --no-profile                Omit the profile cover page
  --out <file.pdf>            Output PDF path (default: portfolio.pdf)
  --skip-build                Reuse existing dist/ instead of running astro build

Examples:
  npm run pdf
  npm run pdf -- --preset ssafy --out ssafy-portfolio.pdf
  npm run pdf -- --detail insulin-note,kanji-mate,veil --summary lol-stat,pet-mate --out custom.pdf
  npm run pdf -- --lang ja --preset ios --out portfolio-ja.pdf
`);
}

function findBrowserExecutable() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  const candidates = process.platform === 'win32'
    ? [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        path.join(process.env.LOCALAPPDATA ?? '', 'Google\\Chrome\\Application\\chrome.exe'),
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
      ]
    : process.platform === 'darwin'
      ? [
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
        ]
      : [
          '/usr/bin/google-chrome',
          '/usr/bin/chromium',
          '/usr/bin/chromium-browser',
        ];

  return candidates.find((p) => p && fs.existsSync(p)) ?? null;
}

function runProcess(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32' && command === 'npm',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

function startStaticServer(dir) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const reqUrl = new URL(req.url ?? '/', 'http://127.0.0.1');
      let relPath = decodeURIComponent(reqUrl.pathname);
      if (relPath.endsWith('/')) relPath += 'index.html';

      const fullPath = path.resolve(dir, `.${relPath}`);
      if (!fullPath.startsWith(dir)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      const filePath = fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()
        ? fullPath
        : fs.existsSync(path.join(fullPath, 'index.html'))
          ? path.join(fullPath, 'index.html')
          : null;

      if (!filePath) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] ?? 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      if (!addr || typeof addr === 'string') {
        reject(new Error('Failed to bind static server'));
        return;
      }
      resolve({ server, port: addr.port });
    });
  });
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const browserPath = findBrowserExecutable();
  if (!browserPath) {
    console.error('Chrome 또는 Edge 실행 파일을 찾을 수 없습니다. CHROME_PATH 환경 변수를 지정해 주세요.');
    process.exit(1);
  }

  if (!opts.skipBuild || !fs.existsSync(distDir)) {
    console.log('1/3 Astro 정적 빌드 실행 중...');
    await runProcess('npm', ['run', 'build'], rootDir);
  }

  const { server, port } = await startStaticServer(distDir);
  const outPath = path.resolve(rootDir, opts.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const params = new URLSearchParams();
  if (opts.preset) params.set('preset', opts.preset);
  if (!opts.profile) params.set('profile', '0');
  if (opts.detail !== null) params.set('detail', opts.detail);
  if (opts.summary !== null) params.set('summary', opts.summary);

  const query = params.toString();
  const targetUrl = `http://127.0.0.1:${port}/${opts.lang}/pdf/${query ? `?${query}` : ''}`;

  console.log(`2/3 PDF 렌더링 중: ${targetUrl}`);

  try {
    await runProcess(
      browserPath,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--no-pdf-header-footer',
        '--virtual-time-budget=4000',
        `--print-to-pdf=${outPath}`,
        targetUrl,
      ],
      rootDir,
    );
    console.log(`3/3 완료: ${outPath}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

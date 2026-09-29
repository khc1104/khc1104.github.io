// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://khc1104.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

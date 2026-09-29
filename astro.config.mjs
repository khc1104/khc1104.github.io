// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://khc1104.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: {
          ko: 'ko-KR',
          ja: 'ja-JP',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

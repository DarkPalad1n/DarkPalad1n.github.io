// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: 'https://darkpalad1n.github.io',
  integrations: [sitemap({ filter: (page) => site.blog || !new URL(page).pathname.startsWith('/blog') })],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-sans',
      weights: [400, 500, 700],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 600],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});

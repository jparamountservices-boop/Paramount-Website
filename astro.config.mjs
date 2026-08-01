// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://paramountknox.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Exclude noindex campaign pages (e.g. the /scan/ yard-sign landing page)
      // so the sitemap only lists pages we actually want indexed.
      filter: (page) => !page.includes('/scan/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

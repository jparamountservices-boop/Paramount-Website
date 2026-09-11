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
      // Keep noindex pages (PPC landing pages, /scan/ yard-sign page, thank-you)
      // out of the sitemap so it only lists pages we want indexed.
      filter: (page) =>
        !page.includes('/lp/') && !page.includes('/scan/') && !page.includes('/thank-you/') &&
        !page.includes('/concrete/repair/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bumpxfeed.com', // Replace with your site's canonical URL
  integrations: [
    sitemap({
      entryLimit: 50000, // Set a high entry limit to reduce splitting
      filter: (page) => {
        console.log('Including page in sitemap:', page);
        return true; // Include all pages in the sitemap
      },
    }),
  ],
});

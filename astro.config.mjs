import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bumpxfeed.com', // Replace with your actual site URL
  integrations: [
    mdx(), 
    sitemap({ 
      // Optional: Customize sitemap settings here
    }),
  ],
});

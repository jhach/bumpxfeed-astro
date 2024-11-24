<<<<<<< HEAD
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
=======
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

>>>>>>> 7e4f49be7851bb727bf748b03933b8683ed08e2e
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'https://bumpxfeed.com', // Replace with your actual site URL
  integrations: [
    mdx(), 
    sitemap({ 
      // Optional: Customize sitemap settings here
    }),
  ],
=======
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
>>>>>>> 7e4f49be7851bb727bf748b03933b8683ed08e2e
});

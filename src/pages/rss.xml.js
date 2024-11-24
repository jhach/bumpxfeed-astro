import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const blogPosts = await getCollection('blog');

  const items = blogPosts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/blog/${post.slug}/`, // Ensure the correct path is added
  }));

  return rss({
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    site: siteConfig.siteUrl, // Base URL
    items, // Valid RSS items
  });
}

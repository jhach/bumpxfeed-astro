import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z
      .object({
        name: z.string(),
        url: z.string().url(),
      })
      .optional(), // Make author optional in case some posts don't have it
  }),
});

export const collections = { blog };
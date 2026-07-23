import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection — Marcus Sheridan "They Ask, You Answer" / The Big 5.
 * category maps to the Big 5 buckets so the blog index can filter by intent.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Cost', 'Comparisons', 'Problems', 'Best-of', 'How-to']),
    primaryKeyword: z.string(),
    heroSubhead: z.string().optional(),
    /** Service paths to cross-link, e.g. ["concrete/driveways"]. */
    related: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };

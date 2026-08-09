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
    // Optional hero image (public path) + alt, used for the post hero + OG image.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    // Optional SEO overrides — when set, used for <title>/meta instead of the
    // (longer, headline-style) post title/description.
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // Optional FAQ pairs → FAQPage schema (kept verbatim with the body FAQ).
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };

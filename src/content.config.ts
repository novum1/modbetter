import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
    affiliateProducts: z.array(z.string()).default([]),
    cornerstone: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };

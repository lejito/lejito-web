import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };

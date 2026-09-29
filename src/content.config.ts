import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    platform: z.enum(['ios', 'android', 'web']),
    summary: z.string(),
    period: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()),
    featured: z.boolean().optional(),
    highlights: z.array(z.string()).optional(),
    appScreenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),
    links: z
      .object({
        github: z.string().optional(),
        store: z.string().optional(),
        demo: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { projects };

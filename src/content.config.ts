import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A piece of text written in all three languages.
const t = z.object({ fr: z.string(), en: z.string(), de: z.string() });

// One folder per project: projects/<slug>/index.md + images/
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      year: z.string(),
      location: z.string(),
      programme: t,
      status: t,
      context: t,
      summary: t,
      text: t,
      cover: image(),
      images: z
        .array(
          z.object({
            src: image(),
            size: z.enum(['full', 'half', 'half-right']).default('full'),
            caption: t.optional(),
          }),
        )
        .default([]),
    }),
});

// About page: one Markdown file per language (fr.md, en.md, de.md).
const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './about' }),
  schema: z.object({
    lead: z.string(),
  }),
});

export const collections = { projects, about };

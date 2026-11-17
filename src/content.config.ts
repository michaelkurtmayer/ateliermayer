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
      type: t,
      status: t,
      context: t,
      summary: t,
      text: t,
      cover: image().optional(), // no cover = blank, unclickable, no page
      images: z
        .array(
          z.object({
            src: image(),
            // Drawings: a version at twice the size. With it, both files are
            // served exactly as exported (never recompressed), so lines stay crisp.
            src2x: image().optional(),
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
  schema: z.object({}),
});

export const collections = { projects, about };

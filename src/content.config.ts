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
      cover: image().optional(), // no cover and no images = blank, unclickable, no page
      coverCaption: t.optional(), // shown beside the cover on the project page (e.g. Perspective)
      images: z
        .array(
          z.object({
            src: image(),
            // Drawings: a version at twice the size. With it, both files are
            // served exactly as exported (never recompressed), so lines stay crisp.
            src2x: image().optional(),
            // A slide of text instead of the image (e.g. the thesis abstract), set like
            // the bio. `src` is then only the Work page thumbnail. Paragraphs are
            // separated by a blank line; *asterisks* for italics; English.
            textSlide: z.string().optional(),
            size: z.enum(['full', 'half', 'half-right']).default('full'),
            // A simple name (never the sheet title), shown in the left column of the
            // project page and used as alt text; the scale goes on the line below it.
            caption: t.optional(),
            // One string for all three languages ('1:50'), or one per language where the
            // number is written differently (1:1,500,000 / 1:1 500 000 / 1:1.500.000).
            scale: z.union([z.string(), t]).optional(),
            // Images by others (e.g. a historic photo): who to credit, on the lines
            // below the caption. A line break starts a new line; *asterisks* for titles;
            // [text](https://…) for a link (e.g. a data licence).
            credit: t.optional(),
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

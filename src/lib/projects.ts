import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** All projects, in the order set by `order:` in each project file. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Projects with a cover or at least one image, and so a page of their own. */
export async function getPublishedProjects() {
  return (await getProjects()).filter((p) => slidesOf(p, 'en').length > 0);
}

/** A project's images in slideshow order: the cover (if any), then the images.
 *  Each has its caption (a simple name) and scale, shown beside it on the project page. */
export function slidesOf(p: CollectionEntry<'projects'>, lang: Lang) {
  const d = p.data;
  const alt = (caption?: string, scale?: string) => (caption ? (scale ? `${caption}, ${scale}` : caption) : d.title);
  return [
    ...(d.cover ? [{ src: d.cover, caption: d.coverCaption?.[lang], alt: alt(d.coverCaption?.[lang]) }] : []),
    ...d.images.map((img) => ({
      src: img.src,
      src2x: img.src2x,
      text: img.textSlide,
      caption: img.caption?.[lang],
      scale: img.scale,
      credit: img.credit?.[lang],
      alt: alt(img.caption?.[lang], img.scale),
    })),
  ];
}

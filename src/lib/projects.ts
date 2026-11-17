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

/** A project's images in slideshow order: the cover (if any), then the images. */
export function slidesOf(p: CollectionEntry<'projects'>, lang: Lang) {
  const d = p.data;
  return [
    ...(d.cover ? [{ src: d.cover, alt: d.title }] : []),
    ...d.images.map((img) => ({ src: img.src, src2x: img.src2x, alt: img.caption?.[lang] ?? d.title })),
  ];
}

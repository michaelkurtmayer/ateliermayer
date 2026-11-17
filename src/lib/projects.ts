import { getCollection } from 'astro:content';

/** All projects, in the order set by `order:` in each project file. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Projects that have a cover image, and so a page of their own. */
export async function getPublishedProjects() {
  return (await getProjects()).filter((p) => p.data.cover);
}

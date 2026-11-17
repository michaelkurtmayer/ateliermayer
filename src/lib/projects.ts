import { getCollection } from 'astro:content';

/** All projects, in the order set by `order:` in each project file. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

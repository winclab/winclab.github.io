// Returns the lab PI: the person in src/content/people/ with `role: pi`.
// Edit that Markdown file (hong-chen.md) to change the PI's details anywhere on the site.
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPI(): Promise<CollectionEntry<'people'>> {
  const pis = await getCollection('people', (p) => p.data.role === 'pi');
  if (pis.length !== 1) {
    throw new Error(`Expected exactly one person with "role: pi" in src/content/people/, found ${pis.length}.`);
  }
  return pis[0];
}

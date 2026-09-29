import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { isLang } from '../i18n/utils';

export type ProjectEntry = CollectionEntry<'projects'>;

export function projectSlug(id: string): string {
  const parts = id.split('/');
  return parts.at(-1) ?? id;
}

export function projectLang(id: string): string {
  return id.split('/')[0] ?? '';
}

function sortProjects(entries: ProjectEntry[]): ProjectEntry[] {
  return [...entries].sort((a, b) => {
    const featured = Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured));
    if (featured !== 0) {
      return featured;
    }
    return projectSlug(a.id).localeCompare(projectSlug(b.id));
  });
}

export async function getProjectsByLang(lang: Lang): Promise<ProjectEntry[]> {
  const entries = await getCollection(
    'projects',
    (entry) => entry.id.startsWith(`${lang}/`) && entry.data.draft !== true,
  );
  return sortProjects(entries);
}

export function featuredProjects(projects: ProjectEntry[]): ProjectEntry[] {
  return projects.filter((entry) => entry.data.featured === true);
}

export function otherProjects(projects: ProjectEntry[]): ProjectEntry[] {
  return projects.filter((entry) => entry.data.featured !== true);
}

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  return getCollection('projects', (entry) => {
    const lang = projectLang(entry.id);
    return isLang(lang) && entry.data.draft !== true;
  });
}

export function firstScreenshot(entry: ProjectEntry): { src: string; alt: string } | undefined {
  return entry.data.appScreenshots?.[0];
}

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

export async function getProjectsByLang(lang: Lang): Promise<ProjectEntry[]> {
  return getCollection(
    'projects',
    (entry) => entry.id.startsWith(`${lang}/`) && entry.data.draft !== true,
  );
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

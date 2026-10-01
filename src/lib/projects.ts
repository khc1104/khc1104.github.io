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

function byNewest(a: ProjectEntry, b: ProjectEntry): number {
  return b.data.startDate.getTime() - a.data.startDate.getTime();
}

function sortProjects(entries: ProjectEntry[]): ProjectEntry[] {
  return [...entries].sort((a, b) => {
    const featured = Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured));
    if (featured !== 0) {
      return featured;
    }
    return byNewest(a, b);
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

export function homeProjects(projects: ProjectEntry[]): ProjectEntry[] {
  return projects.filter((entry) => entry.data.featured !== true && entry.data.home === true);
}

export function groupByYear(
  projects: ProjectEntry[],
): { year: number; projects: ProjectEntry[] }[] {
  const groups = new Map<number, ProjectEntry[]>();
  for (const entry of [...projects].sort(byNewest)) {
    const year = entry.data.startDate.getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), entry]);
  }
  return [...groups].map(([year, entries]) => ({ year, projects: entries }));
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

export function platformLabelKey(
  platform: ProjectEntry['data']['platform'],
): 'platformIos' | 'platformAndroid' | 'platformWeb' {
  if (platform === 'android') {
    return 'platformAndroid';
  }
  if (platform === 'web') {
    return 'platformWeb';
  }
  return 'platformIos';
}

export function mockupAltKey(
  platform: ProjectEntry['data']['platform'],
): 'heroMockupAlt' | 'webMockupAlt' {
  return platform === 'web' ? 'webMockupAlt' : 'heroMockupAlt';
}

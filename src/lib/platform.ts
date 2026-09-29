export const projectPlatforms = ['ios', 'android', 'web'] as const;

export type ProjectPlatform = (typeof projectPlatforms)[number];

export function isProjectPlatform(value: string): value is ProjectPlatform {
  return (projectPlatforms as readonly string[]).includes(value);
}

import { defaultLang, languages, ui, type Lang } from './ui';

export const locales = Object.keys(languages) as Lang[];

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ko' ? 'ja' : 'ko';
}

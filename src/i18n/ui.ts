export const languages = {
  ko: '한국어',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ko';

export const ui = {
  ko: {
    siteName: '희철',
    navHome: '홈',
    navProjects: '프로젝트',
    langSwitch: '日本語',
    heroTitle: '모바일 개발자 포트폴리오',
    heroBody: '소개 문구는 곧 채워집니다.',
    aboutTitle: '소개',
    aboutBody: '소개 섹션입니다.',
    stackTitle: '기술',
    stackBody: '사용 기술은 곧 채워집니다.',
    projectsTitle: '프로젝트',
    projectsBody: '프로젝트 목록은 곧 채워집니다.',
    contactTitle: '연락',
    contactBody: '연락처는 곧 채워집니다.',
    emptyProjects: '표시할 프로젝트가 없습니다.',
    heroMockupAlt: '앱 화면 미리보기',
    targetLabel: '타깃',
    footer: '© 2026',
  },
  ja: {
    siteName: 'Heecheol',
    navHome: 'ホーム',
    navProjects: 'プロジェクト',
    langSwitch: '한국어',
    heroTitle: 'モバイル開発者ポートフォリオ',
    heroBody: '紹介文は近日掲載します。',
    aboutTitle: '紹介',
    aboutBody: '紹介セクションです。',
    stackTitle: '技術',
    stackBody: '技術スタックは近日掲載します。',
    projectsTitle: 'プロジェクト',
    projectsBody: 'プロジェクト一覧は近日掲載します。',
    contactTitle: '連絡先',
    contactBody: '連絡先は近日掲載します。',
    emptyProjects: '表示できるプロジェクトがありません。',
    heroMockupAlt: 'アプリ画面のプレビュー',
    targetLabel: 'ターゲット',
    footer: '© 2026',
  },
} as const;

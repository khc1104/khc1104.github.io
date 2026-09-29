import type { Lang } from '../i18n/ui';

export type PlaceholderProject = {
  slug: string;
  stack: string[];
  targets: string[];
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
};

export const stackLabels = ['Android', 'Kotlin', 'Swift', 'Jetpack Compose'] as const;

export const placeholderProjects: PlaceholderProject[] = [
  {
    slug: 'commute',
    stack: ['Android', 'Kotlin'],
    targets: ['kakao'],
    title: {
      ko: '출퇴근 기록 앱',
      ja: '通勤記録アプリ',
    },
    summary: {
      ko: '위치와 근무 시간을 묶어 보여주는 샘플 카드입니다.',
      ja: '位置と勤務時間をまとめて見せるサンプルカードです。',
    },
  },
  {
    slug: 'health',
    stack: ['Swift'],
    targets: ['sony'],
    title: {
      ko: '건강 루틴 앱',
      ja: 'ヘルスルーティンアプリ',
    },
    summary: {
      ko: '알림과 주간 리포트를 가정한 플레이스홀더입니다.',
      ja: '通知と週次レポートを想定したプレースホルダーです。',
    },
  },
  {
    slug: 'notes',
    stack: ['Kotlin', 'Jetpack Compose'],
    targets: ['rakuten'],
    title: {
      ko: '현장 메모 앱',
      ja: '現場メモアプリ',
    },
    summary: {
      ko: '오프라인 메모와 사진 첨부를 가정한 카드입니다.',
      ja: 'オフラインメモと写真添付を想定したカードです。',
    },
  },
];

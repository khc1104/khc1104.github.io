# 모든 프로젝트 페이지

- 날짜: 2026-10-01
- Phase: n/a
- 상태: 완료

## 한 일
- 새 페이지 `/ko/projects/`, `/ja/projects/`에서 프로젝트 전체를 시작 연도별(2026 / 2024 / 2023)로 나눠 압축 목록으로 보여 준다.
- 홈의 "그 외 프로젝트"는 `home: true`로 고른 Veil, LolStat 2개만 보여 주고, 아래에 "모든 프로젝트 보기 (7)" 링크를 뒀다. 프로젝트가 늘어도 홈 길이는 그대로다.
- 헤더 "프로젝트"와 상세 페이지 "프로젝트 목록" 링크가 새 목록 페이지로 간다.
- 정렬이 파일 이름순에서 시작일 최신순으로 바뀌었다. 그래서 홈 대표 프로젝트 순서가 KanjiMate, Insulin Note로 바뀌었고, 홈 공유 미리보기(og:image)도 대표 첫 번째인 KanjiMate 화면이 된다.
- LolStat 기간을 "개인 / 학습 프로젝트"에서 GitHub 커밋 기록 기준 "2023.11 ~ 2025.04"로 바꿨다.

## 변경 파일
- `src/content.config.ts` — `startDate`(필수), `home` 필드
- `src/content/projects/{ko,ja}/*.mdx` — 14개 파일에 `startDate`, veil·lol-stat에 `home: true`, LolStat `period`
- `src/lib/projects.ts` — 시작일 최신순 정렬, `homeProjects`, `groupByYear` (`otherProjects` 제거)
- `src/pages/[lang]/projects/index.astro` — 연도별 모든 프로젝트 페이지
- `src/pages/[lang]/index.astro` — 홈 그 외 섹션을 `homeProjects` + 전체 보기 링크로
- `src/components/Header.astro`, `src/pages/[lang]/projects/[slug].astro` — 목록 링크를 새 페이지로
- `src/i18n/ui.ts` — `allProjectsTitle`, `allProjectsLink`, `allProjectsDescription`

## 확인
- `npm run build` 통과 (18에서 20페이지), 사이트맵에 목록 페이지 2개 포함.
- 브라우저: ko 홈에 대표 2개 + Veil·LolStat + "모든 프로젝트 보기 (7)"(높이 44px), 헤더 링크 `/ko/projects/`. ko 목록 데스크톱 연도 3묶음과 썸네일 6개 + Veil 빈 칸. ja 목록 390px 가로 넘침 없음, 언어 전환이 `/ko/projects/`로 감. 상세 페이지 목록 링크 확인.
- HIG: 전체 보기 링크 높이 44px·포커스 링, 목록 페이지는 h1 아래 연도 h2 위계.
- 남은 리스크: 대표 프로젝트 순서가 바뀐 것(위 참고). Insulin Note를 먼저 두려면 대표 정렬 기준을 따로 정해야 한다.

## 다음에
- 대표 프로젝트 순서를 직접 정할지 결정 (예: `order` 필드)
- 새 프로젝트를 추가할 때 `startDate`는 필수, 홈에 보이려면 `home: true`

## 읽는 순서
1. `src/content.config.ts` — 프로젝트 frontmatter 스키마. `startDate`가 없으면 빌드가 실패하므로
   새 MDX에 반드시 넣는다. `home`은 대표가 아닌 프로젝트를 홈에 올리는 표시다.
2. `src/lib/projects.ts` — 정렬(대표 우선, 그다음 시작일 최신순)과 `homeProjects`, `groupByYear`.
   홈과 목록 페이지가 이 함수들로 같은 데이터를 다르게 나눈다.
3. `src/pages/[lang]/projects/index.astro` — `getStaticPaths`로 언어별 목록 페이지를 만들고,
   연도마다 `SectionHeader`와 `ProjectList`를 그린다.
4. `src/pages/[lang]/index.astro` — 홈. 대표는 `ProjectGrid`, 고른 프로젝트는 `ProjectList`,
   그 아래 전체 개수가 붙은 목록 링크.

# 프로젝트 targets 제거

- 날짜: 2026-09-29
- Phase: n/a (Phase 4 준비)
- 상태: 완료

## 한 일

- 프로젝트 MDX 스키마와 카드·상세에서 `targets`를 빼, 작품이 회사를 기억하지 않게 했다.
- 로드맵 Phase 4를 홈 필터가 아니라, 지원 확정 후 기업 페이지가 slug 목록을 갖는 모델로 고쳤다. `/for/` 라우트는 아직 없다.

## 변경 파일

- `src/content.config.ts` — `targets` 필드 삭제
- `src/components/ProjectCard.astro`, `ProjectGrid.astro` — 타깃 칩·props 삭제
- `src/pages/[lang]/index.astro`, `src/pages/[lang]/projects/[slug].astro` — 타깃 표시 삭제
- `src/i18n/ui.ts` — `targetLabel` 삭제
- `.cursor/docs/roadmap.md` — 콘텐츠 모델·Phase 4 작업 내용

## 확인

- `npm run build` 성공. 스키마에 `targets` 없음. `/for/` 없음.

## 다음에

- 지원 기업이 정해지면 Phase 4: `applications/{id}` + `/[lang]/for/[company]`.

## 읽는 순서

1. `src/content.config.ts` — 프로젝트 frontmatter 목록이다. 회사 id 자리가 없다. `featured`만 홈 위아래를 가른다.

2. `src/components/ProjectCard.astro` — 제목·요약·스택·목업만 그린다. 타깃 한 줄이 없다.

3. `.cursor/docs/roadmap.md` — Phase 4는 대기이며, 지원 페이지가 `projectSlugs`로 작품을 고른다고 적혀 있다.

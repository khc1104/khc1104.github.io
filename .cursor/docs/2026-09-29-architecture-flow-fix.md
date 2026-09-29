# 아키텍처 흐름 카드 번호·화살표 수정

- 날짜: 2026-09-29
- Phase: n/a (Phase 6 후속 수정)
- 상태: 완료

## 한 일

- "설계와 기술 선택"의 가로 스크롤 카드 옆에 붙던 `1.` `2.` 목록 번호를 없앴다. 카드 안의 `01` 번호만 남는다.
- 카드 테두리 위에 회색 배경으로 겹치던 화살표를 카드 사이 간격에 놓인 배경 없는 화살표로 바꿨다.
- 모든 카드 폭과 높이를 같게 맞췄다. 모바일에서는 세로 카드와 `↓` 화살표로 보인다.
- 목차(`CaseStudyNav`)의 중복 목록 번호도 함께 없앴다.

## 변경 파일

- `src/pages/[lang]/projects/[slug].astro` — 본문 스타일을 `.project-body`의 직계 자식에만 적용해 MDX 컴포넌트 내부로 새지 않게 했다.
- `src/components/mdx/ArchitectureFlow.astro` — 카드와 화살표를 형제 요소로 분리하고 목록 기본 스타일을 제거했다.
- `src/components/mdx/CaseStudyNav.astro` — `ol`에 `list-none p-0`을 추가했다.

## 확인

- `npm run build` 성공.
- 로컬 미리보기에서 한국어 Insulin Note와 일본어 KanjiMate를 확인했다. 데스크톱에서 카드 7개가 모두 208×130px이고, 카드 번호가 카드 안에 있다.
- 390px 모바일에서 문서 가로 넘침이 없다.
- 본문 표·글머리 기호 목록은 기존 스타일을 유지한다.
- HIG 점검: 순서는 색이 아닌 숫자와 화살표로 전달한다. 장식 화살표는 `aria-hidden`이며 움직임이 없다.

## 다음에

- 새 MDX 컴포넌트를 만들 때 목록·문단은 컴포넌트 안에서 스타일을 직접 지정한다.

## 읽는 순서

1. `src/components/mdx/ArchitectureFlow.astro` — 단계 카드와 화살표를 그리는 MDX 컴포넌트다.
   `li` 안에서 카드와 화살표를 나란히 두어 겹침 없이 모바일 세로·데스크톱 가로 흐름을 만든다.

2. `src/pages/[lang]/projects/[slug].astro` — 상세 페이지의 본문 스타일을 정의한다.
   `.project-body > :global(...)`로 MDX가 직접 만든 요소에만 적용하고 컴포넌트 내부는 건드리지 않는다.

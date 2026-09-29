# 모바일 개발자 UI 컴포넌트

- 날짜: 2026-09-29
- Phase: 2
- 상태: 완료

## 한 일

- 홈에 CSS 아이폰 목업, 기술 뱃지, 프로젝트 카드 3장을 붙였다. JS island는 없다.
- 본문 폭을 `max-w-5xl`로 넓혀 히어로(글 | 폰)와 카드 2열이 들어가게 했다.

## 변경 파일

- `src/styles/global.css` — paper/ink/device 토큰
- `src/layouts/BaseLayout.astro`, `Header.astro`, `Footer.astro` — `max-w-5xl`
- `src/components/IphoneMockup.astro` 등 다섯 컴포넌트
- `src/data/placeholder-projects.ts` — 한·일 샘플 3건
- `src/pages/[lang]/index.astro`, `src/i18n/ui.ts`

## 확인

- `npx astro build` 성공. `client:` directive 없음.
- 브라우저: `/ko/` 히어로 목업·뱃지·카드, `/ja/` 일본어 카드 제목. 1280px 2열, 390px에서 헤더/카드 가로 넘침 없음.

## 다음에

- Phase 3: MDX 컬렉션으로 placeholder를 교체하고 상세 페이지를 만든다.

## 읽는 순서

1. `src/styles/global.css` — 색 이름(`paper`, `ink`, `device`)을 정한다. 이후 컴포넌트의 `bg-device` 같은 클래스가 여기서 온다.

2. `src/data/placeholder-projects.ts` — 카드에 넣을 가짜 프로젝트다. 필드(`title`, `stack`, `targets`)는 나중에 MDX frontmatter와 같게 맞춰 두었다.

3. `src/components/IphoneMockup.astro` — CSS로 그린 폰 프레임이다. `src`가 없으면 그라데이션 슬롯만 보인다.

4. `src/components/TechBadge.astro` — 스택 이름 칩 하나다. 홈 기술 섹션과 카드 안에서 같이 쓴다.

5. `src/components/ProjectCard.astro` — 목업 + 제목 + 뱃지를 한 장으로 묶는다. `ProjectGrid.astro`가 이 카드를 여러 장 놓는다.

6. `src/pages/[lang]/index.astro` — 홈에서 위 조각을 조립하는 페이지다. `[lang]`이 `ko`/`ja`일 때 같은 레이아웃에 다른 문구가 들어간다.

## 다음 전 질문

1. 카드 제목을 바꾸려면 `index.astro`가 아니라 어느 파일을 고치는가?
2. `IphoneMockup.astro`에서 스크린샷이 없을 때 화면에 무엇이 보이는가?
3. Phase 3에서 MDX를 넣으면 `placeholder-projects.ts`와 `ProjectGrid.astro` 중 무엇을 갈아끼우는가?

# 프로젝트 플랫폼 구분

- 날짜: 2026-09-29
- Phase: n/a
- 상태: 완료

## 한 일

- 프로젝트 MDX에 `platform: ios | android | web`을 넣었다. 카드·상세가 아이폰 / 안드로이드 / 브라우저 프레임을 고른다. Veil은 Web이다.

## 변경 파일

- `src/content.config.ts` — `platform` 필수
- `src/content/projects/{ko,ja}/*.mdx` — 기존 iOS 6개 + Veil `web`
- `src/components/DevicePreview.astro` — 플랫폼별 프레임
- `src/components/AndroidMockup.astro`, `src/components/BrowserMockup.astro` — 안드로이드·웹 목업
- `src/components/ProjectCard.astro`, `ProjectGrid.astro` — 라벨과 프레임
- `src/pages/[lang]/index.astro`, `src/pages/[lang]/projects/[slug].astro` — 히어·상세
- `src/i18n/ui.ts`, `src/lib/projects.ts`, `src/lib/platform.ts`
- `.cursor/docs/roadmap.md` — 콘텐츠 모델

## 확인

- `npm run build`. 홈 Veil 카드는 브라우저 프레임, Insulin Note는 아이폰.

## 다음에

- 안드로이드 프로젝트가 생기면 MDX에 `platform: android`만 적는다.

## 읽는 순서

1. `src/content.config.ts` — `platform`이 없으면 빌드가 실패한다. 값은 `ios` / `android` / `web`만 받는다.

2. `src/components/DevicePreview.astro` — 카드·히어·상세가 이 파일만 보고 아이폰·안드로이드·브라우저 목업 중 하나를 고른다.

3. `src/content/projects/ko/veil.mdx` — `platform: web`이면 아이폰이 아니라 브라우저 창이 붙는다.

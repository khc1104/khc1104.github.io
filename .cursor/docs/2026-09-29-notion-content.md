# 노션 실글 반영

- 날짜: 2026-09-29
- Phase: 3 보강 (n/a, Phase 4 아님)
- 상태: 완료

## 한 일

- 샘플 commute/health/notes를 지우고, 노션 이력의 Insulin Note·KanjiMate 케이스와 짧은 프로젝트 5건을 한·일 MDX로 넣었다.
- 홈 Hero/소개/스택/연락을 노션 자기소개에 맞추고, `featured` 카드를 위에 두었다.

## 변경 파일

- `src/content.config.ts` — `featured` 선택 필드, `targets` 기본 빈 배열
- `src/content/projects/{ko,ja}/*.mdx` — 대표 2 + 짧은 5
- `public/projects/insulin-note/` — 커버·스크린샷 로컬 복사
- `src/i18n/ui.ts` — 홈 문구, 연락 라벨
- `src/data/stack.ts` — Swift 계열 스택
- `src/data/contact.ts` — GitHub·메일·App Store URL
- `src/lib/projects.ts` — featured 정렬·분할
- `src/pages/[lang]/index.astro` — 대표/그 외 그리드, 연락 링크
- `src/pages/[lang]/projects/[slug].astro` — GitHub/스토어 링크, 본문 표 스타일
- `.cursor/docs/roadmap.md` — Phase 3 보강 행

## 확인

- `npm run build` 성공. `/ko/projects/insulin-note/`에 문제·기능과 성과·문제 해결 헤딩.
- 브라우저: `/ko/` 소개·스택이 샘플이 아님. Insulin Note 카드 → 상세 → 日本語 → `/ja/projects/insulin-note/`. `/ja/projects/kanji-mate/` 열림.
- 사용자 확인 대상: Insulin Note 다운로드 16건(2026-07-19), KanjiMate OCR recall 표(2026-08-19 실기기), KanjiMate 기간 `2026.07.03 ~ 진행 중`.

## 다음에

- Phase 4: `/[lang]/for/[company]`와 `targets` 채우기.

## 읽는 순서

1. `src/content.config.ts` — MDX frontmatter 스키마. `featured`가 true면 홈 위에 올라가고, `targets`는 Phase 4용이라 지금은 비운다.

2. `src/content/projects/ko/insulin-note.mdx` — 대표작 본문 템플릿(문제 → 역할 → 기능과 성과 → 문제 해결). `ja/insulin-note.mdx`가 같은 slug의 일본어 쌍이다. 이미지는 `public/projects/insulin-note/`를 가리킨다.

3. `src/content/projects/ko/kanji-mate.mdx` — 두 번째 대표작. 수치 표와 해결 2건(raw 지표 / 세로 OCR)이 여기 있다.

4. `src/content/projects/ko/list-up.mdx` — 짧은 상세의 예. 개요·담당·GitHub만 있고 케이스 스터디 헤딩은 없다.

5. `src/lib/projects.ts` — `getProjectsByLang`이 featured를 앞에 두고, `featuredProjects`/`otherProjects`로 홈 두 그리드를 나눈다.

6. `src/pages/[lang]/index.astro` — Hero·스택·연락과 대표/그 외 `ProjectGrid`. 문구는 `src/i18n/ui.ts`, URL은 `src/data/contact.ts`.

7. `src/pages/[lang]/projects/[slug].astro` — 컬렉션 MDX를 `render()`해서 넣고, frontmatter `links`로 GitHub/스토어를 붙인다.

## 다음 전 질문

1. 홈에서 Insulin Note가 KanjiMate보다 위에 있는 이유는 frontmatter의 어느 필드인가?
2. 노션 S3 이미지 URL을 MDX에 그대로 넣지 않은 이유는 무엇인가?
3. `targets`를 비워 둔 상태에서 Phase 4의 `/ko/for/kakao/`를 만들면, 그 페이지는 지금 프로젝트 목록을 어떻게 골라야 하는가?

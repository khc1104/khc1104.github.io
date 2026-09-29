# MDX 컬렉션과 상세 페이지

- 날짜: 2026-09-29
- Phase: 3
- 상태: 완료

## 한 일

- 샘플 프로젝트 3건을 `ko`/`ja` MDX 컬렉션으로 옮겼다. 홈 카드가 `/[lang]/projects/[slug]` 상세로 연결된다.
- 상세에서 언어를 바꾸면 같은 slug의 반대 언어 페이지로 간다. `placeholder-projects.ts`는 삭제했다.

## 변경 파일

- `src/content.config.ts` — Zod 스키마
- `src/content/projects/{ko,ja}/*.mdx` — commute, health, notes
- `src/lib/projects.ts` — 언어 필터·slug
- `src/data/stack.ts` — 홈 스택 뱃지 목록
- `src/pages/[lang]/projects/[slug].astro` — 상세
- `src/pages/[lang]/index.astro`, `ProjectGrid.astro`, `ProjectCard.astro`, `Header.astro`

## 확인

- `npx astro build` 성공. `dist/ko/projects/commute/` 등 9페이지. YAML `period`는 문자열로 써야 한다 (`"2024"`).
- 브라우저: 홈 카드 → `/ko/projects/commute/` → 日本語 → `/ja/projects/commute/`.

## 다음에

- 노션 실글을 MDX에 넣고 일본어를 다듬는 플랜.

## 읽는 순서

1. `src/content.config.ts` — 프로젝트 MDX가 지켜야 할 필드 목록이다. 빠지거나 타입이 다르면 빌드가 실패한다.

2. `src/content/projects/ko/commute.mdx` — 위는 frontmatter(제목·스택), 아래는 본문이다. `ja/commute.mdx`가 같은 slug의 일본어 쌍이다.

3. `src/lib/projects.ts` — `getCollection('projects')` 결과를 현재 언어 폴더만 남긴다. 홈과 상세가 이 함수를 같이 쓴다.

4. `src/pages/[lang]/index.astro` — 컬렉션에서 카드를 그리는 홈이다. 더 이상 `placeholder-projects.ts`를 읽지 않는다.

5. `src/pages/[lang]/projects/[slug].astro` — `[slug]`가 `commute` 같은 파일 이름이다. MDX 본문을 `render()`해서 넣는다.

6. `src/components/Header.astro` — 지금 URL에서 `/ko`만 `/ja`로 바꿔 같은 상세로 보낸다.

## 다음 전 질문

1. 출퇴근 앱 한국어 제목을 바꾸려면 어느 파일을 고치는가?
2. 홈 목록은 어떤 함수로 MDX를 가져오는가?
3. `/ko/projects/health/`에서 日本語를 누르면 어느 주소로 가는가?

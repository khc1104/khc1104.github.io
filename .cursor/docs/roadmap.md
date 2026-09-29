# khc1104.github.io 포트폴리오 로드맵

모바일 개발자 포트폴리오. 한국어/일본어 이중 언어, GitHub Pages 배포.

- 저장소: [khc1104/khc1104.github.io](https://github.com/khc1104/khc1104.github.io)
- 배포 URL: `https://khc1104.github.io` (유저 사이트, `base` 불필요)
- 로컬 경로: `C:\ssafy\portfolio`

## 목표

채용 담당자가 언어(ko/ja)와 기업 맥락에 맞는 프로젝트·스택·앱 화면을 빠르게 보게 한다. 사이트는 앱이 아니라 **정적 콘텐츠 사이트**다.

## 확정 기술

| 영역 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Astro 5, `output: 'static'` | GitHub Pages에 HTML을 올리고, JS는 필요한 곳만 |
| 언어 | TypeScript | 콘텐츠 스키마·라우트 타입 |
| 스타일 | Tailwind CSS 4 + Astro 컴포넌트 | 목업·뱃지·카드 |
| 본문 | `@astrojs/mdx` + Content Collections | 노션 원본을 Git MDX로 고정 |
| i18n | Astro 내장 라우팅 | `/ko`, `/ja` |
| 배포 | GitHub Actions (`withastro/action` + `actions/deploy-pages`) | Pages 공식 경로 |
| 쓰지 않음 | Next.js, Notion 런타임 API, 전 페이지 React, Three.js 목업 | Pages·콘텐츠 사이트와 안 맞음 |

## 아키텍처 결정

1. **유저 사이트**: 저장소 이름이 `khc1104.github.io`이므로 공개 주소는 루트다. `astro.config`의 `site`는 `https://khc1104.github.io`, `base`는 두지 않는다.
2. **언어 prefix**: `locales: ['ko', 'ja']`, `prefixDefaultLocale: true`. 루트 `/`는 기본 언어로 리다이렉트. 기본 언어는 Phase 1에서 `ko`로 두고, 일본 전용 링크는 `/ja`를 쓴다.
3. **노션은 원본, MDX는 소스**: 빌드가 Notion에 의존하지 않는다. 글은 `src/content/projects/{ko,ja}/*.mdx`.
4. **기업 페이지는 지원 패키지**: 프로젝트 MDX에 회사 태그를 두지 않는다. 지원이 정해지면 `/[lang]/for/[company]`를 그 기업용 포트폴리오로 새로 만들고, 그 페이지가 보여줄 프로젝트 slug·소개·스택을 갖는다. `?company=`만으로 홈을 걸러 쓰지 않는다.
5. **인터랙션은 아일랜드만**: 레이아웃·카드·목업은 서버(빌드) HTML. 필터 UI만 client island.

## 사이트 맵

```text
/                    → /ko/ 리다이렉트
/ko/                 소개 + 프로젝트 목록
/ko/projects/[slug]  프로젝트 상세
/ko/for/[company]    지원 확정 후, 그 기업용 포트폴리오
/ja/                 동일 구조 (일본어)
/ja/projects/[slug]
/ja/for/[company]    동일 (지원 확정 후)
```

공통 섹션: Hero, About, Stack, Projects, Contact. 앱 스크린샷은 아이폰 목업 안에 둔다.

## 콘텐츠 모델

프로젝트 MDX frontmatter (Zod로 강제):

```ts
{
  title: string
  summary: string
  period?: string
  role?: string
  stack: string[]
  featured?: boolean
  highlights?: string[]
  appScreenshots?: { src: string; alt: string }[]
  links?: { github?: string; store?: string; demo?: string }
  draft?: boolean
}
```

본문은 MDX. 언어별로 파일을 나눈다. 번역은 비즈니스 일본어(겸손·성과 수치·역할 명확). 회사 id는 프로젝트 파일에 두지 않는다. 지원 페이지가 `projectSlugs`로 작품을 고른다.

---

## Phase 0 — 저장소·규칙

**산출물**

- 빈 Git 저장소가 `khc1104.github.io` origin에 연결됨
- 이 로드맵 (`.cursor/docs/roadmap.md`)
- 작업 종료 시 커밋/푸시·작업 기록 룰 (`.cursor/rules/`)

**완료 조건**: 룰이 적용되고, 로드맵이 GitHub `main`에 올라간다.

---

## Phase 1 — Astro 초기화 & 다국어 뼈대

**목표**: `npm run dev`로 `/ko`, `/ja` 레이아웃이 뜨고, `npm run build`가 정적 파일을 만든다.

**작업**

1. `npm create astro@latest` (TypeScript, strict). 기존 폴더에 생성.
2. Tailwind, MDX 통합. `output: 'static'`.
3. `astro.config.mjs`: `site`, i18n (`ko`/`ja`, `prefixDefaultLocale: true`).
4. `src/pages/[lang]/index.astro` + 공통 `BaseLayout.astro` (`html lang`, 폰트, 헤더/푸터, 언어 전환).
5. `src/i18n/ui.ts` (또는 JSON)로 네비·푸터 짧은 문자열.
6. `/` → 기본 로케일 리다이렉트.
7. `.gitignore`, `README.md` (로컬 실행 방법).

**핵심 산출물**: 라우팅(`/[lang]`), 기본 레이아웃, i18n 설정.

**완료 조건**

- `/ko`, `/ja`에 동일한 뼈대
- 언어 전환 시 대응 경로로 이동
- `astro build` 성공, `base` 없음
- 브라우저에서 레이아웃·전환 확인

**에이전트**: 설정·파일 라우팅·레이아웃 생성. 카피 문구는 플레이스홀더로 시작.

---

## Phase 2 — 모바일 개발자 UI 컴포넌트

**목표**: 반응형으로 앱 화면·스택·프로젝트가 “모바일 개발자”처럼 보이게 한다. JS 없이 CSS/Tailwind.

**컴포넌트** (`src/components/`)

| 컴포넌트 | 역할 |
|----------|------|
| `IphoneMockup.astro` | 베젤·노치 프레임, 안쪽에 이미지/슬롯 |
| `TechBadge.astro` | 스택 칩 (Android, Kotlin, Swift 등) |
| `ProjectCard.astro` | 썸네일, 제목, 요약, 뱃지, 타깃 태그 |
| `ProjectGrid.astro` | 카드 그리드, 빈 상태 |
| `SectionHeader.astro` | 섹션 제목 |

**작업**

1. 타이포·색·간격 토큰 (글로벌 CSS 또는 `@theme`).
2. 모바일 퍼스트. 목업은 데스크톱에서 나란히, 좁은 화면에서 축소.
3. `prefers-reduced-motion` 존중. 장식 애니메이션은 선택.
4. 홈에 플레이스홀더 카드 2~3개로 배치 검증.

**완료 조건**: 데스크톱·모바일 뷰포트에서 목업·뱃지·카드가 깨지지 않는다. 불필요한 client directive 없음.

**에이전트**: 마크업/스타일. 실스크린샷은 Phase 3에서 교체.

---

## Phase 3 — MDX 구조화 & 일본어

**목표**: 노션 내용을 컬렉션으로 옮기고, 한·일 상세 페이지가 빌드된다.

**작업**

1. `src/content.config.ts`에 `projects` 컬렉션 + Zod 스키마.
2. `src/content/projects/ko/*.mdx`, `ja/*.mdx`.
3. `src/pages/[lang]/projects/[slug].astro`에서 `getCollection` / `getEntry`.
4. 홈 목록은 컬렉션에서 렌더. draft는 제외.
5. 이미지: `public/` 또는 `src/assets`. alt는 언어별.
6. 일본어: 직역 금지. 역할·성과·수치, 과도한 자기어필 완화.

**완료 조건**: 한·일 각각 실제 프로젝트 1개 이상 상세가 열린다. 스키마와 다른 MDX는 빌드가 실패한다.

**에이전트**: 템플릿 변환, ja 초안. 사실관계(기간, 역할)는 사용자 확인.

---

## Phase 4 — 기업용 포트폴리오 페이지

**목표**: 지원이 정해진 기업에 보내는 URL이 홈과 다른 소개·스택·프로젝트 구성의 페이지다.

**작업**

1. 지원 패키지 데이터 (`src/content/applications/{id}` 또는 `src/data/applications/{id}.ts`): hero, about, stack, `projectSlugs[]`.
2. `src/pages/[lang]/for/[company].astro` + `getStaticPaths` (등록된 id만).
3. 그 페이지에 적은 slug만 보여 준다. 홈을 필터하거나, 매칭 0건이면 전체를 보여 주지 않는다.
4. 존재하지 않는 company는 경로가 없어 404.
5. 홈 `/ko/`는 공개 iOS 포트폴리오로 유지한다.

**완료 조건**: 실제 지원 기업 1곳 이상에 대해 `/[lang]/for/{id}`가 정적 HTML로 나오고, 소개·스택·카드가 홈과 다르다.

**에이전트**: 회사 목록·포지션은 사용자와 확정한 뒤에만 경로를 만든다. 프로젝트 MDX에 회사 태그를 넣지 않는다.

---

## Phase 5 — GitHub Pages 배포 & 검수

**목표**: `main` 푸시 시 Pages가 갱신되고, 메타·OG가 언어/페이지별로 맞다.

**작업**

1. `.github/workflows/deploy.yml`: checkout → `withastro/action` → `actions/upload-pages-artifact` → `actions/deploy-pages`.
2. 저장소 Settings → Pages → GitHub Actions. `has_pages` 활성화는 첫 성공 배포 또는 설정에서.
3. `BaseLayout` SEO: title, description, canonical, `og:title`/`og:image`/`og:locale`, `hreflang` 교차 링크.
4. `robots.txt`, `@astrojs/sitemap`.
5. 검수: 루트 URL, `/ko`, `/ja`, 프로젝트 상세, `/for/{company}`, 404, OG 미리보기, 내부 링크에 `base` 잔재 없음.

**완료 조건**: `https://khc1104.github.io`가 살아 있고, 한·일·기업 URL이 깨지지 않는다.

**에이전트**: 워크플로·메타 태그. DNS/커스텀 도메인은 요청 시에만.

---

## 목표 디렉터리

```text
src/
  pages/
    index.astro                 # 로케일 리다이렉트
    [lang]/
      index.astro
      projects/[slug].astro
      for/[company].astro
  layouts/BaseLayout.astro
  components/                   # 목업, 뱃지, 카드, 그리드
  content/projects/{ko,ja}/*.mdx
  content.config.ts
  i18n/
  data/
astro.config.mjs
.github/workflows/deploy.yml
.cursor/docs/                   # 로드맵·작업 기록
.cursor/rules/                  # 에이전트 워크플로
```

## 단계 의존

```text
Phase 0 → 1 → 2 → 3 → 4 → 5
               └ 3의 실데이터는 2의 플레이스홀더를 교체
               └ 4는 지원 확정 후, 프로젝트 slug 목록은 기업 페이지가 갖는다
               └ 5의 OG는 4의 /for 경로를 포함
```

한 페이즈를 여러 커밋으로 나눠도 된다. 각 커밋은 “동작하는 한 조각”이어야 한다.

## 명시적 비범위

- Notion API 라이브 연동
- 회원/서버/DB
- 다크모드 강제 (이후 가능)
- PDF 이력서 자동 생성 (이후 가능)
- 커스텀 도메인 (요청 시 Phase 5 이후)

## 페이즈별 완료 기록

| Phase | 상태 | 완료일 | 작업 기록 |
|-------|------|--------|-----------|
| 0 저장소·규칙 | 완료 | 2026-09-29 | [2026-09-29-roadmap-and-rules.md](./2026-09-29-roadmap-and-rules.md) |
| 1 Astro·i18n | 완료 | 2026-09-29 | [2026-09-29-astro-i18n.md](./2026-09-29-astro-i18n.md) |
| 2 UI 컴포넌트 | 완료 | 2026-09-29 | [2026-09-29-ui-components.md](./2026-09-29-ui-components.md) |
| 3 MDX·번역 | 완료 | 2026-09-29 | [2026-09-29-mdx-projects.md](./2026-09-29-mdx-projects.md) |
| 3 보강 노션 실글 | 완료 | 2026-09-29 | [2026-09-29-notion-content.md](./2026-09-29-notion-content.md) |
| 4 기업용 페이지 | 대기 | | |
| 5 배포·SEO | 대기 | | |

상태 값은 `대기` / `진행 중` / `완료`. 페이즈가 끝나면 이 표와 해당 `.cursor/docs/` 기록을 함께 갱신한다.

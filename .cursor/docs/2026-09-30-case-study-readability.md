# 케이스 스터디 가독성 개선

- 날짜: 2026-09-30
- Phase: n/a
- 상태: 완료

## 한 일
- Insulin Note: App Store 다운로드를 26건(2026-09-27 기준)으로 고치고, 회고의 향후 계획을 Notion "1.2 개선할 사항"(HealthKit 연동, 영어·일본어 지원, `ModelActor` 파일 분리, Swift Testing, 메인 화면 반영 버그) 목록으로 바꿨다.
- 프로젝트 상세 본문의 문단·목록·표 사이 여백을 `1rem`에서 `1.85rem`(약 +10pt)으로 늘렸다. 제목 바로 아래 문단은 그대로 붙여 두었다.
- Notion에 있던 Insulin Note 이미지 2장(MV 패턴 구조도, 앱 화면 모음)을 `src/assets`로 옮겨 설계·핵심 기능 섹션에 넣었다. 누르면 원본 크기로 열린다.
- KanjiMate: V1/V2/H1/M1, RAW/CORRECTED, 회귀 가드, fixture, 앵커, 일반화, lemma, `fullTextQualityScore` 같은 내부 용어를 쉬운 말로 바꾸고, 소수점 점수를 퍼센트로 바꿨다. 측정 원칙에는 문맥 인식률 예시를 넣었고, 한계와 다음 단계는 쉬운 문장과 할 일 목록으로 다시 썼다.
- KanjiMate 세로글 처리 과정(세로 원문 → 돌리고 열 묶기 → 한 줄로 이어 붙이기)을 설명하는 그림을 HTML로 그려 넣었다.
- KanjiMate 앱 화면 칸 3개(단축어, 잠금 화면 카드, 단어장)를 만들었다. 이미지 파일이 없으면 아무것도 그리지 않는다.

## 변경 파일
- `src/pages/[lang]/projects/[slug].astro` — 문단·목록·표 위 여백 확대
- `src/components/mdx/Figure.astro` — 이미지 + 캡션, 원본 링크, 선택적 안쪽 여백(`padded`)
- `src/components/mdx/ScreenGallery.astro` — `src/assets/projects/<project>/`에 있는 파일만 아이폰 프레임으로 나열
- `src/components/mdx/VerticalStitchDiagram.astro` — 세로글 처리 3단계 설명 그림
- `src/assets/projects/insulin-note/mv-architecture.png`, `screens.png` — Notion에서 옮긴 이미지
- `src/content/projects/{ko,ja}/insulin-note.mdx` — 다운로드 수, 1.2 계획, 이미지 배치
- `src/content/projects/{ko,ja}/kanji-mate.mdx` — 쉬운 말·퍼센트로 다시 쓰기, 설명 그림과 화면 칸

## 확인
- `npm run build` 통과 (18페이지). 원본 링크 `/_astro/mv-architecture.*.png`, `/_astro/screens.*.png`가 `dist`에 있다.
- 로컬 미리보기에서 ko/ja Insulin Note·KanjiMate를 데스크톱과 390px로 확인: 가로 넘침 없음, 이미지 로드, 설명 그림 카드 폭 동일(데스크톱 232px ×3), 빈 화면 칸은 렌더되지 않음.
- HIG: 이미지 대체 텍스트, 링크 포커스 링, 새 애니메이션 없음, 아이폰 프레임은 iOS 앱 화면(ScreenGallery)에만 사용.
- 남은 리스크: 앱 화면 모음 이미지는 5장을 붙인 가로 이미지라 모바일에서 작게 보인다(눌러서 원본 확인 가능). Notion의 "화면 이동 동선" 이미지는 첨부 파일이라 도구로 내려받지 못해 넣지 않았다.

## 다음에
- KanjiMate 캡처를 `src/assets/projects/kanji-mate/shortcut.png`, `live-activity.png`, `wordbook.png`로 넣으면 화면 칸이 나타난다.
- "화면 이동 동선" 이미지를 Notion에서 직접 내보내 `src/assets/projects/insulin-note/`에 넣고 설계 섹션에 `Figure`로 추가한다.

## 읽는 순서
1. `src/components/mdx/Figure.astro` — MDX 본문에서 쓰는 이미지 카드. `astro:assets`의 `<Image>`가 빌드 때 여러 크기의 webp를 만들고,
   원본 파일은 링크로 연결한다.
2. `src/components/mdx/ScreenGallery.astro` — `import.meta.glob`으로 `src/assets/projects/*/`의 이미지를 빌드 때 모아,
   요청한 파일이 있을 때만 `IphoneMockup`으로 그린다.
3. `src/components/mdx/VerticalStitchDiagram.astro` — 이미지 파일 없이 HTML로 그린 3단계 도식.
   데스크톱은 가로 카드, 모바일은 세로로 쌓인다.
4. `src/content/projects/ko/kanji-mate.mdx` — Content Collection의 MDX 항목. 위 컴포넌트를 상대 경로로 import해
   본문 중간에 넣는다.
5. `src/pages/[lang]/projects/[slug].astro` — 모든 프로젝트 상세를 그리는 동적 라우트.
   `.project-body >` 직계 자식 스타일로 문단 여백만 바꾸고 MDX 컴포넌트에는 영향을 주지 않는다.

# 프로젝트 케이스 스터디 재설계

- 날짜: 2026-09-29
- Phase: 6
- 상태: 완료

## 한 일

- Insulin Note와 KanjiMate의 한·일 본문을 Notion 원문에 맞춰 자연스러운 케이스 스터디로 확장했다.
- 핵심 수치, 목차, 아키텍처 흐름, 콜아웃, 문제·원인·해결·결과 카드를 추가했다.
- 나머지 프로젝트는 대표작의 우선순위를 유지하도록 짧은 상세로 남겼다.

## 변경 파일

- `src/components/mdx/*.astro` — 케이스 스터디 전용 UI
- `src/content/projects/{ko,ja}/insulin-note.mdx` — 제품 배경, 데이터 구조, UI 개선, 회고
- `src/content/projects/{ko,ja}/kanji-mate.mdx` — OCR 파이프라인, fixture 지표, 문제 해결, 한계
- `src/pages/[lang]/projects/[slug].astro` — 긴 글 타이포·표·모바일 오버플로
- `.cursor/docs/roadmap.md` — Phase 6과 완료 기록
- `.cursor/rules/work-log.mdc` — Phase 범위를 6까지 확장

## 확인

- `npm run build` 성공. 기존 MDX 번들 경고 외 오류 없음.
- IDE 린트 오류 없음.
- 로컬 브라우저에서 한국어 Insulin Note, 일본어 KanjiMate를 확인했다.
- 390px 모바일에서 문서 폭과 스크롤 폭이 같고, 접기 UI·목차·아키텍처가 동작한다.
- Insulin Note 이미지는 `public/projects/insulin-note/`의 로컬 파일을 유지했다. MDX에 만료되는 Notion URL은 없다.
- HIG 점검: 명확한 정보 계층, 44px 접기·목차 대상, 키보드 포커스, 색 외의 라벨, 모션 감소를 반영했다.

## 다음에

- 실제 지원 기업이 정해지면 Phase 4 기업용 페이지에 대표 케이스 스터디의 섹션 링크를 골라 연결한다.

## 읽는 순서

1. `src/content/projects/ko/insulin-note.mdx` — 대표 케이스 스터디의 기본 문장 구조다.
   수치 → 목차 → 배경 → 설계 → 기능 → 문제 해결 → 회고 순서로 읽힌다.

2. `src/components/mdx/Troubleshooting.astro` — 긴 트러블슈팅을 문제·원인·해결·결과로 나눈다.
   핵심 제목은 항상 보이고 구현 세부만 네이티브 `details`로 펼친다.

3. `src/components/mdx/ArchitectureFlow.astro` — 텍스트 파이프라인을 순서가 있는 카드로 그린다.
   별도 JavaScript 없이 모바일 세로 흐름과 데스크톱 가로 흐름을 제공한다.

4. `src/content/projects/ko/kanji-mate.mdx` — 복잡한 OCR 설명을 구조화한 사례다.
   fixture 수치는 표에 남기고, 선택 이유와 한계는 본문·콜아웃으로 분리한다.

5. `src/pages/[lang]/projects/[slug].astro` — 모든 상세 페이지가 공유하는 Astro 페이지다.
   본문 폭, 헤딩 간격, 코드, 표 스크롤과 모바일 그리드 축소를 책임진다.

## 다음 전 질문

1. 트러블슈팅의 첫 사례만 기본으로 펼치고 나머지를 접은 이유는 무엇인가?
2. KanjiMate의 RAW와 CORRECTED를 하나의 점수로 합치지 않은 이유는 무엇인가?
3. 아키텍처를 이미지 한 장 대신 HTML 카드 흐름으로 표현했을 때 얻는 접근성·반응형 이점은 무엇인가?

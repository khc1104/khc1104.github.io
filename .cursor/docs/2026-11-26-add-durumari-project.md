# Durumari 프로젝트 웹·PDF 포트폴리오 추가

- 날짜: 2026-11-26
- Phase: n/a
- 상태: 완료

## 한 일
- 두루마리 MCP(`F103 / Durumari`) 작업 기록·컨텍스트와 로컬 Git(`origin/dev`, 225 커밋) 근거를 바탕으로 **Durumari** 프로젝트를 한국어·일본어 웹 포트폴리오 MDX와 A4 가로 PDF 빌더에 추가했습니다(`thisPatch`는 요청에 따라 제외).
- 홈(`home: true`)과 상세 페이지(`/ko/projects/durumari/`, `/ja/projects/durumari/`)에 지표(`225 커밋`, `회의 STT A측 49건`, `위젯 14종`), 6단계 회의 STT 아키텍처 흐름, 트러블슈팅 3건을 수록했습니다.
- A4 가로 PDF 빌더(`/ko/pdf/`, `/ja/pdf/`)에 Durumari 1p 상세 시트(담당 아키텍처 모듈 4개)와 요약 카드를 추가하고 `ios`·`ssafy`·`all` 프리셋을 갱신했습니다.
- 8개 프로젝트 모두 수록할 때도 1p 프로필 목차가 넘치지 않도록 밀도를 조정하고, 단일 프로젝트 시트·요약 카드에 `데모 ↗`(`https://durumari.kr`) 링크를 노출했습니다.
- 프로필([src/data/profile.ts](../../src/data/profile.ts))의 SSAFY 15기 경험 요약에 자율 프로젝트 Durumari를 반영했습니다.

## 변경 파일
- `src/content/projects/ko/durumari.mdx` — 한국어 Durumari 케이스 스터디(배경, 회의 STT 파이프라인, 위젯·확장·알림, 트러블슈팅 3건, 회고)
- `src/content/projects/ja/durumari.mdx` — 일본어 Durumari 케이스 스터디
- `src/data/profile.ts` — 한·일 SSAFY 15기 경험 문구에 자율 프로젝트 Durumari 반영
- `src/data/pdfPortfolio.ts` — 한·일 Durumari PDF 상세·요약 데이터 추가 및 프리셋(`ios`, `ssafy`, `all`) 갱신
- `src/components/pdf/PdfSingleProjectSheet.astro`, `src/components/pdf/PdfSummaryCard.astro` — `links.demo` 클릭 가능 링크 표시
- `src/components/pdf/PdfProfileSheet.astro`, `src/pages/[lang]/pdf.astro` — 8개 프로젝트 수록 시 1p 목차 패딩 자동 밀도 조정

## 확인
- `npm run build` 정상 통과 (`26 page(s) built`, `/ko/projects/durumari/`, `/ja/projects/durumari/` 정적 생성 확인).
- `npm run pdf -- --preset ssafy --out portfolio-ssafy.pdf` (8p) 및 `npm run pdf -- --preset ios --out portfolio.pdf` (6p) 생성 후 전 페이지 시각 검증 완료(1p 8/8 목차 넘침 없음, 6p Durumari 상세 시트·요약 카드 정상).

## 다음에
- 대시보드 위젯·회의 STT·브라우저 확장 실제 화면 스크린샷을 받으면 `public/projects/durumari/`에 추가해 웹(`BrowserMockup`)과 PDF에 반영합니다.

## 읽는 순서
1. `src/content/projects/ko/durumari.mdx` — Durumari 한국어 상세 페이지로, 지표·회의 STT 아키텍처 흐름·트러블슈팅 3건을 MDX 컴포넌트로 구성합니다.
2. `src/content/projects/ja/durumari.mdx` — 동일한 정보 구조의 일본어 상세 페이지입니다.
3. `src/data/pdfPortfolio.ts` — A4 가로 PDF 빌더의 Durumari 상세/요약 데이터와 `ssafy`·`ios`·`all` 프리셋 구성을 담습니다.
4. `src/data/profile.ts` — 홈 및 PDF 표지의 SSAFY 15기 경험 요약을 갱신합니다.
5. `src/pages/[lang]/pdf.astro` — 7개 이상 프로젝트가 선택돼도 1페이지 목차가 넘치지 않도록 밀도를 동적으로 조정합니다.

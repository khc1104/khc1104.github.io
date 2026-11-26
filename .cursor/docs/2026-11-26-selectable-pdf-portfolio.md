# 선택형 A4 가로 PDF 포트폴리오 빌더 및 CLI 내보내기

- 날짜: 2026-11-26
- Phase: n/a
- 상태: 완료

## 한 일
- 세로 블로그형 웹 페이지를 그대로 인쇄할 때 프로젝트가 여러 페이지로 잘리는 문제를 해결하기 위해, **A4 가로(297×210mm) 고정 페이지 단위**의 전용 PDF 빌더(`/ko/pdf/`, `/ja/pdf/`)를 추가했습니다.
- 제출 목적에 따라 각 프로젝트를 **상세(1~2p) · 요약(최대 4개/장) · 제외**로 선택하고 순서를 바꿀 수 있게 구현했습니다.
- 프리셋(`iOS 지원용`, `SSAFY 리뷰용`, `대표작 핵심만`, `전체 상세`), 프로필 표지 토글, URL 쿼리 동기화(`?profile=&detail=&summary=`), 실시간 페이지 번호·목차 연동을 지원합니다.
- 외부 패키지 설치 없이 로컬 Chrome/Edge headless로 PDF를 바로 추출하는 `npm run pdf` CLI 스크립트를 추가했습니다.
- 사이트 헤더에 `PDF` 링크를 추가하고, 생성된 루트 `*.pdf` 파일은 `.gitignore`에 제외했습니다.

## 변경 파일
- `src/data/pdfPortfolio.ts` — 한·일 PDF 고정 페이지용 프로젝트 데이터, 프리셋, UI 문구 정의
- `src/components/pdf/PdfSheet.astro` — A4 가로 1장 컨테이너 및 동적 페이지 번호 푸터
- `src/components/pdf/PdfMiniPhone.astro` — 인쇄용 즉시 로딩(`loading="eager"`) 컴팩트 iPhone 목업
- `src/components/pdf/PdfProfileSheet.astro` — 1p 프로필 표지 및 선택 프로젝트 연동 동적 목차
- `src/components/pdf/PdfSpreadSheet.astro` — 대표작(Insulin Note, KanjiMate) 2p 고정 스프레드(개요·화면·설계 / 트러블슈팅·검증·회고)
- `src/components/pdf/PdfSingleProjectSheet.astro` — 개별 프로젝트(Veil, LolStat, PetMate, Timoney, ListUp) 1p 고정 상세 시트
- `src/components/pdf/PdfSummaryCard.astro` — 요약 시트(2×2 그리드)용 컴팩트 프로젝트 카드
- `src/pages/[lang]/pdf.astro` — 선택·정렬·프리셋·인쇄 컨트롤 바 및 A4 가로 인쇄 스타일 페이지
- `src/components/Header.astro`, `src/i18n/ui.ts` — 헤더에 `PDF` 메뉴 링크 및 한·일 라벨 추가
- `scripts/export-pdf.mjs`, `package.json` — 로컬 Chrome/Edge headless 기반 `npm run pdf` CLI 내보내기 스크립트
- `.gitignore`, `README.md` — 루트 `/*.pdf` 무시 규칙 및 PDF 내보내기 사용법 문서화

## 확인
- `npm run build` 성공 (`22 page(s) built`, `/ko/pdf/`, `/ja/pdf/` 정적 생성 확인).
- `npm run pdf`로 `ssafy`(7p), `ios`(6p), 커스텀(`--detail insulin-note,lol-stat --summary veil`, 5p), 일본어(`--lang ja --preset ios`, 6p) PDF를 각각 생성하고 전 페이지를 시각 검증했습니다.
- 1p 프로필 목차 7개 수록 시 넘침 없음, 단건 요약 카드 높이 유지, 빈 꼬리 페이지 없음을 확인했습니다.
- Apple HIG 점검: 인쇄 툴바 컨트롤에 충분한 클릭 영역과 포커스 링을 적용했고, iOS 프로젝트는 iPhone 목업, 웹 프로젝트(`Veil`)는 아키텍처 모듈 카드로 구분했습니다.

## 다음에
- SSAFY 특화 프로젝트(Steam 운영 진단 플랫폼) 정리가 끝나면 MDX와 `src/data/pdfPortfolio.ts`에 추가해 PDF 선택 목록에 포함합니다.

## 읽는 순서
1. `src/data/pdfPortfolio.ts` — 한·일 PDF 포트폴리오에 들어갈 프로젝트별 고정 페이지 데이터와 프리셋을 정의합니다. 기존 `profile.ts`·프로젝트 frontmatter와 합쳐 단일 소스로 재사용합니다.
2. `src/components/pdf/PdfSheet.astro` — 297×210mm A4 가로 한 장을 표현하는 공통 Astro 시트 컴포넌트입니다. 인쇄 시 페이지 넘김과 동적 페이지 번호 푸터를 담당합니다.
3. `src/components/pdf/PdfProfileSheet.astro` — 1페이지 표지(프로필·스택·경력)와 선택한 프로젝트에 맞춰 페이지 번호가 바뀌는 목차를 렌더링합니다.
4. `src/components/pdf/PdfSpreadSheet.astro` — 대표작(`Insulin Note`, `KanjiMate`)을 1/2p(개요·화면·설계)와 2/2p(트러블슈팅·검증·회고) 두 장으로 고정 배치합니다.
5. `src/components/pdf/PdfSingleProjectSheet.astro` — 나머지 프로젝트를 단독 1페이지로 배치하며, 스크린샷이 있는 iOS 앱은 미니 목업을, 비공개 웹 프로젝트(`Veil`)는 아키텍처 모듈 카드를 표시합니다.
6. `src/pages/[lang]/pdf.astro` — 프로젝트 선택(상세·요약·제외)·순서 변경·프리셋·URL 쿼리 동기화·인쇄 CSS를 묶는 Astro 동적 로케일 페이지입니다.
7. `scripts/export-pdf.mjs` — 빌드된 `dist/`를 임시 로컬 서버로 띄우고 로컬 Chrome/Edge headless로 원하는 조합의 PDF를 바로 저장하는 CLI 스크립트입니다.

## 추가 수정 — 웹 요약 카드 기본 썸네일 비율 보정
- `PdfSummaryCard.astro`에서 대표 이미지가 없는 웹 프로젝트(`Veil`)가 세로로 좁은 막대(`w-[86px]`)로 보이던 문제를 수정해, 이미지가 있는 웹 프로젝트와 동일한 16:9 가로 브라우저 프레임(`w-[124px] aspect-video`)으로 통일했습니다.

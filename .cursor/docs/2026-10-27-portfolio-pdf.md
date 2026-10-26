# 지원용 PDF 내보내기

- 날짜: 2026-10-27
- Phase: n/a
- 상태: 완료

## 한 일
- 한국어·일본어 포트폴리오를 A4 한 문서로 보는 `/[lang]/print/`를 추가했다.
- `npm run pdf`가 `export/portfolio-ko.pdf`를 만든다. 일본어는 `npm run pdf -- ja`.
- PDF와 인쇄 페이지에는 이메일과 프로필 사진을 넣지 않는다. 공개 홈은 그대로다.
- 이름, GitHub, 프로젝트 링크, 학력은 남긴다. 검색 노출은 `noindex`이고 사이트맵에서 빠진다.

## 변경 파일
- `src/pages/[lang]/print.astro` — 소개, 기술, 차례, 작품 본문, 이력을 한 문서에 모은다.
- `src/layouts/PrintLayout.astro` — A4 여백, 작품 단위 쪽 나눔, 접힌 문제 해결 펼치기, 정지 화면 사용.
- `scripts/export-pdf.mjs` — 빌드 후 Chrome으로 PDF를 쓴다.
- `src/i18n/ui.ts` — 차례 라벨.
- `astro.config.mjs` — 인쇄 경로를 사이트맵에서 제외.
- `package.json`, `README.md`, `.gitignore` — `pdf` 스크립트와 `export/` 제외.

## 확인
- `npm run pdf`로 28쪽, 약 4.8MB. 본문에 `naver`, 메일 주소, 프로필 사진 없음. 공개 홈 HTML에는 메일과 사진이 남아 있다.
- 1·2·5·28쪽을 이미지로 확인. 1쪽은 소개·기술·차례, 2쪽은 KanjiMate, 5쪽은 아이폰 화면 4장, 28쪽은 이력.
- 접혀 있던 문제 해결 항목이 PDF 본문에 보인다. iOS 화면은 아이폰 프레임이다.
- HIG: 본문은 흰 배경에 진한 글자, 장식 움직임 없음, 웹 프로젝트는 브라우저 본문 그대로.
- 리스크: 28쪽이라 분량 제한이 있으면 길다. 학력에 고등학교명이 있다. GitHub 주소는 1쪽에 있다.

## 다음에
- 분량을 줄이거나 이름·학교·GitHub까지 빼야 하면 그 범위만 다시 뽑는다.

## 읽는 순서
1. `src/pages/[lang]/print.astro` — 지원용 문서가 어떤 순서로 구성되는지 정한다. 프로필과 프로젝트 MDX를 가져와 이메일 없이 그린다.
2. `src/layouts/PrintLayout.astro` — A4 인쇄 스타일과, 인쇄 전에 문제 해결 블록을 펼치고 움직이는 화면 대신 정지 이미지를 쓰게 하는 스크립트.
3. `scripts/export-pdf.mjs` — 로컬 Chrome으로 `/ko/print/`를 PDF 파일로 저장하는 명령.

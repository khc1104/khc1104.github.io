# 다른 프로젝트 화면 채우기

- 날짜: 2026-10-01
- Phase: n/a
- 상태: 완료

## 한 일
- Timoney, ListUp, LolStat, PetMate의 GitHub README 화면으로 홈 카드와 상세 페이지 오른쪽 목업을 채웠다 (`appScreenshots` → `public/projects/<slug>/cover.jpg`, og:image로도 쓰임).
- 상세 본문 소개 문단 아래에 화면 칸을 넣었다.
  - Timoney: 초기 설정·메인·위시리스트 녹화 3칸 (움직이는 WebP, reduced motion이면 정지 장면).
  - ListUp: 메인 흐름 녹화 1칸 + 메인 화면·알림 키워드 설정 캡처 2칸.
  - LolStat: 소환사 검색·소환사 정보·듀오 게시판·듀오 글 상세 4칸.
  - PetMate: 홈·돌봄 목록 필터·게시글 상세 3칸 (README에 캘린더 화면이 없어 제외).
- ListUp README 캡처는 시뮬레이터 기기 테두리가 있어, 테두리가 깨끗한 두 장만 화면 영역으로 잘랐다. 나머지 두 장은 창 배경이 섞여 제외했다.
- `ScreenDemos`의 `stillSrc`를 선택 항목으로 바꿔 녹화와 정지 캡처를 한 줄에 섞을 수 있게 했다.
- Veil은 GitHub 링크가 없어 손대지 않았다.

## 변경 파일
- `src/components/mdx/ScreenDemos.astro` — `stillSrc` 선택 항목
- `src/content/projects/{ko,ja}/timoney.mdx` — 대표 이미지, `ScreenDemos` 3칸
- `src/content/projects/{ko,ja}/list-up.mdx` — 대표 이미지, `ScreenDemos` 3칸
- `src/content/projects/{ko,ja}/lol-stat.mdx` — 대표 이미지, `ScreenGallery` 4칸
- `src/content/projects/{ko,ja}/pet-mate.mdx` — 대표 이미지, `ScreenGallery` 3칸
- `public/projects/timoney/` — `setup|main|wishlist.webp`(움직임, 각 0.4~1MB)과 `-still.webp`, `cover.jpg`
- `public/projects/list-up/` — `flow.webp`(약 1MB), `flow-still.webp`, `home.webp`, `alerts.webp`, `cover.jpg`
- `public/projects/{lol-stat,pet-mate}/cover.jpg` — 대표 이미지
- `src/assets/projects/lol-stat/*.png`, `src/assets/projects/pet-mate/*.jpg` — 갤러리 원본 (빌드 때 480px webp)

## 확인
- `npm run build` 통과 (18페이지).
- 브라우저: ko/ja 홈 카드 6개 이미지 로드, Timoney·ListUp·PetMate 상세 데스크톱, ListUp·LolStat(ja) 390px 가로 스크롤.
- reduced motion 에뮬레이션에서 Timoney 3칸, ListUp 녹화 칸이 `-still.webp`로 바뀌는 것 확인.
- HIG: 원본 이미지에 기기 테두리가 없거나 잘라냈으므로 이중 프레임 없음. 모든 이미지에 내용 기반 alt.
- 남은 리스크: LolStat 원본 상태 표시줄에 화면 녹화 빨간 표시가 남아 있다.

## 다음에
- GitHub Pages Source가 GitHub Actions인지 확인 (Jekyll 빌드 실패 알림 제거).

## 읽는 순서
1. `src/content/projects/ko/timoney.mdx` — 프런트매터 `appScreenshots`가 카드·상세 목업·og:image를 정하고,
   본문의 `ScreenDemos`가 `public/` 경로 문자열로 움직이는 WebP를 그대로 보여 준다.
2. `src/components/mdx/ScreenDemos.astro` — 항목마다 `IphoneMockup`을 그리고, `stillSrc`가 있을 때만
   `<picture>`의 reduced-motion `<source>`로 정지 장면을 고른다.
3. `src/content/projects/ko/lol-stat.mdx` — `ScreenGallery`는 `src/assets/projects/<project>/` 파일 이름만 받아
   `astro:assets`로 480px webp를 만들어 목업에 넣는다.

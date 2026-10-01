# KanjiMate 실제 화면 넣기

- 날짜: 2026-10-01
- Phase: n/a
- 상태: 완료

## 한 일
- 사용자가 보낸 KanjiMate 캡처 4장을 OCR 파이프라인 섹션의 화면 칸에 넣었다. 순서는 최근 분석 → 내 단어장 → Dynamic Island 카드 → 잠금 화면 카드.
- 단축어 실행 화면 캡처는 없어서, 처음 계획한 `shortcut.png` 칸 대신 뉴스를 읽다 뜨는 Dynamic Island 카드를 넣었다.
- 각 칸에 화면에 보이는 단어까지 적은 대체 텍스트를 달고, 그림 설명을 "최근 분석에 임시로 쌓이고 저장하면 내 단어장으로 옮겨진다" 흐름으로 바꿨다. (ko/ja)

## 변경 파일
- `src/assets/projects/kanji-mate/recent.png` — 최근 분석(임시 보관소) 화면
- `src/assets/projects/kanji-mate/wordbook.png` — 내 단어장 화면
- `src/assets/projects/kanji-mate/dynamic-island.jpg` — NHK 뉴스 위 Dynamic Island 카드
- `src/assets/projects/kanji-mate/live-activity.jpg` — 잠금 화면 카드
- `src/content/projects/{ko,ja}/kanji-mate.mdx` — `ScreenGallery` 항목·설명 교체

## 확인
- `npm run build` 통과 (18페이지). 4장 모두 480px webp로 변환되어 로드된다.
- ko 데스크톱, ja 390px 확인: 가로 넘침 없음. 목업의 아일랜드가 Dynamic Island 카드의 빈 가운데에 놓여 글자를 가리지 않는다.
- HIG: 아이폰 프레임은 iOS 앱 화면에만 사용, 대체 텍스트 있음.
- 잠금 화면 캡처에 Insulin Note 잠금 화면 위젯이 함께 보인다. 사용자 확인 후 그대로 두었다.

## 다음에
- 없음

## 읽는 순서
1. `src/content/projects/ko/kanji-mate.mdx` — `ScreenGallery`의 `items`에 파일 이름만 적으면,
   컴포넌트가 `src/assets/projects/kanji-mate/`에서 같은 이름의 파일을 찾아 그린다.
2. `src/components/mdx/ScreenGallery.astro` — `import.meta.glob`으로 모은 이미지를 `getImage`로 480px webp로 만들고
   `IphoneMockup`에 넣는다. 파일이 없는 칸은 건너뛴다.

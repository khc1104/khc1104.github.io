# 그 외 프로젝트 압축 목록

- 날짜: 2026-10-01
- Phase: n/a
- 상태: 완료

## 한 일
- 홈의 '그 외 프로젝트'(ListUp, LolStat, PetMate, Timoney, Veil)를 큰 목업 카드에서 압축 행 목록으로 바꿨다. 한 행에 작은 썸네일, 플랫폼, 제목, 요약(두 줄까지), 스택을 넣고 행 전체를 상세 링크로 만들었다.
- 대표 프로젝트(Insulin Note, KanjiMate)는 큰 카드를 그대로 뒀다.
- 섹션 높이: 데스크톱 약 950px에서 474px, 390px 모바일 약 2,500px에서 802px로 줄었다.

## 변경 파일
- `src/components/ProjectList.astro` — 압축 행 목록 (데스크톱 2열, 모바일 1열). 스크린샷이 없는 Veil은 같은 크기의 회색 칸에 "Web"을 표시
- `src/pages/[lang]/index.astro` — 그 외 섹션을 `ProjectGrid`에서 `ProjectList`로 교체

## 확인
- `npm run build` 통과 (18페이지).
- 브라우저: ko 데스크톱, ja 390px에서 썸네일 4개와 Veil 빈 칸, 가로 넘침 없음.
- HIG: 행 전체가 탭 대상(높이 120px 이상), `focus-visible` 2px 링 확인(DevTools로 상태 강제), 요약 글자색 zinc-600(흰 배경 대비 약 7:1). 썸네일은 기기 프레임 없는 장식 이미지(`alt=""`)이고 링크 이름은 제목·요약이 맡는다.
- 남은 리스크: 모바일에서 긴 요약은 두 줄에서 말줄임된다. 전체 문장은 상세 페이지에 있다.

## 다음에
- 없음

## 읽는 순서
1. `src/pages/[lang]/index.astro` — 홈 페이지 라우트. `featuredProjects`는 `ProjectGrid`(큰 카드)로,
   `otherProjects`는 `ProjectList`(압축 행)로 넘긴다.
2. `src/components/ProjectList.astro` — 프로젝트마다 `appScreenshots` 첫 장을 작은 썸네일로 잘라 보여 주고,
   `getRelativeLocaleUrl`로 언어별 상세 링크를 만든다.

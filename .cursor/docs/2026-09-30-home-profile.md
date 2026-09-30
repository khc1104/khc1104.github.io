# 홈 화면 개편

- 날짜: 2026-09-30
- Phase: n/a
- 상태: 완료

## 한 일

- 홈 상단을 이름, `iOS / SwiftUI`, Notion 자기소개 3줄, 연락 링크(GitHub·메일·App Store)로 바꿨다.
- 이름 옆 대표 앱 목업을 프로필 사진 자리로 바꿨다. 사진이 없으면 이름 첫 글자 자리 표시가 나온다.
- "소개" 섹션과 "프로젝트" 상위 헤더를 없앴다. "대표 프로젝트"가 `h2`이고 `#projects` 앵커를 가진다.
- 기술을 Language / UI / Architecture / Data & Platform / Tools / Secondary 카테고리로 나눠 보여 준다.
- 프로젝트 아래에 이력(경험·학력·자격증·어학) 섹션을 추가했다. 하단 연락 섹션도 같은 링크 버튼을 쓴다.
- 일본어 헤더에서 긴 사이트 이름 때문에 내비 항목이 줄바꿈되던 문제를 막았다.

## 변경 파일

- `src/data/profile.ts` — ko/ja 소개 3줄, 기술 카테고리, 경험·학력·자격증 데이터
- `src/components/ProfilePhoto.astro` — `src/assets/profile.*`가 있으면 최적화 이미지, 없으면 자리 표시
- `src/components/ContactLinks.astro` — 44px 높이 연락 링크 버튼 (히어로·하단 공용)
- `src/components/SkillGroups.astro` — 카테고리별 기술 목록
- `src/components/HistoryList.astro` — 기간·제목·요약 이력 목록
- `src/pages/[lang]/index.astro` — 새 섹션 순서
- `src/i18n/ui.ts` — 소개·프로젝트 설명 키 제거, 이력·사진 키 추가, 일본어 사이트 이름 변경 포함
- `src/components/Header.astro` — 내비 항목 줄바꿈 방지
- `src/data/stack.ts` — 삭제 (카테고리 데이터로 대체)

## 확인

- `npm run build` 성공.
- 로컬 미리보기에서 `/ko/` 데스크톱, `/ja/` 390px 모바일 확인. 가로 넘침 0, 연락 링크 높이 44px.
- HIG 점검: 제목 계층 h1 → h2 → h3, 링크 포커스 링, 사진 대체 텍스트, Secondary 기술도 흰 배경 대비 확보.
- 남은 일: 실제 사진 파일이 아직 없다.

## 다음에

- 증명사진 또는 여행 사진을 `src/assets/profile.jpg`(세로 3:4 권장)로 넣고 빌드하면 자리 표시가 사진으로 바뀐다.

## 읽는 순서

1. `src/data/profile.ts` — 홈에 보이는 소개·기술·이력 문구의 원본이다.
   언어별 객체라서 문구 수정은 이 파일만 고치면 된다.

2. `src/pages/[lang]/index.astro` — `[lang]` 동적 라우트로 `/ko/`, `/ja/` 홈을 만든다.
   `profiles[lang]`을 읽어 히어로 → 기술 → 프로젝트 → 이력 → 연락 순서로 컴포넌트에 넘긴다.

3. `src/components/ProfilePhoto.astro` — `import.meta.glob`으로 빌드 시점에 사진 파일 유무를 확인한다.
   있으면 `astro:assets`의 `<Image>`가 크기별 이미지를 만들고, 없으면 첫 글자 자리 표시를 그린다.

4. `src/components/SkillGroups.astro`, `src/components/HistoryList.astro` — 카테고리 표와 이력 목록이다.
   모바일에서는 라벨이 위, 데스크톱에서는 왼쪽 열로 배치된다.

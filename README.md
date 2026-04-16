# Cocos Games

Cocos Creator로 만든 게임 모음. GitHub Pages로 배포.

Live: https://playgempark.github.io/cocos-games/

## 구조

- `index.html` — 랜딩 페이지 (게임 목록)
- `<game-name>/` — 각 게임 빌드 결과 (`web-mobile` 내용 복사)
- `.nojekyll` — GitHub Pages Jekyll 처리 비활성화 (언더스코어 파일 보호)

## 새 게임 추가

1. Cocos Creator에서 `web-mobile` 빌드
2. 빌드 폴더 내용을 `<game-name>/` 에 복사
3. `index.html` 그리드에 카드 추가
4. commit & push

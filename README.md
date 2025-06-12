# 김한빈 포트폴리오

> Vite + React 기반 포트폴리오 웹사이트입니다.

---

## 🛠 개발 환경

- Frontend: React + Vite
- 패키지 매니저: npm
- 개발 서버 주소: http://localhost:5173

### ✅ 개발 서버 실행

``npm run dev``

---

## 🚀 배포 (GitHub Pages)

### 1. 빌드

``npm run build``

(dist 폴더에 결과 생성)

---

### 2. GitHub Pages 배포

``npm run deploy``

(gh-pages 패키지를 사용하여 dist/를 gh-pages 브랜치에 배포)

---

## ⚙ package.json 예시

```json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist",
  "dev": "vite"
}
```

---

## 📦 gh-pages 설치

npm install --save-dev gh-pages

---

## 🛠 vite.config.js 설정

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rnflrnfl41.github.io/' // 본인 GitHub 저장소명으로 수정
})
```

---

## 🧩 GitHub Pages 설정

1. GitHub 저장소 → Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages / (root) 선택

---

## 📁 폴더 구조

```
my-portfolio/
├── src/
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 📝 기타

문제가 생기면 아래 명령어 순서대로 점검하세요:

```
npm run dev
npm run build
npm run deploy
```
```
dev 주소: http://localhost:5173/rnflrnfl41.github.io/
라이브 주소: https://rnflrnfl41.github.io/
```

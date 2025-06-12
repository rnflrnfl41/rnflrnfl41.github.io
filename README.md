# 김한빈 포트폴리오

> Vite + React 기반 포트폴리오 웹사이트입니다.

---

## 🛠 개발 환경

- Frontend: React + Vite
- 패키지 매니저: npm
- 개발 서버 주소: http://localhost:5173

### ✅ 개발 서버 실행

npm install
npm run dev

- 개발 중에는 루트(index.html)를 사용합니다.
- public 폴더는 정적 자산 전용입니다.

---

## 🚀 배포 (GitHub Pages)

### 1. index.html 복사

빌드 전에 루트의 index.html을 public/index.html로 복사해야 합니다.

Windows:
copy index.html public\index.html

macOS / Linux:
cp index.html public/index.html

---

### 2. 빌드

npm run build

(dist 폴더에 결과 생성)

---

### 3. GitHub Pages 배포

npm run deploy

(gh-pages 패키지를 사용하여 dist/를 gh-pages 브랜치에 배포)

---

## ⚙ package.json 예시

"scripts": {
  "copy-index": "copy index.html public\\index.html",
  "build": "npm run copy-index && vite build",
  "deploy": "gh-pages -d dist",
  "dev": "vite"
}

(mac 사용자는 copy-index를 cp index.html public/index.html 로 변경)

---

## 📦 gh-pages 설치

npm install --save-dev gh-pages

---

## 🛠 vite.config.js 설정

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rnflrnfl41.github.io/' // 본인 GitHub 저장소명으로 수정
})

---

## 🧩 GitHub Pages 설정

1. GitHub 저장소 → Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages / (root) 선택

---

## 📁 폴더 구조

my-portfolio/
├── public/
│   └── index.html (복사된 배포용)
├── src/
│   └── main.jsx
├── index.html (개발용)
├── package.json
└── vite.config.js

---

## 📝 기타

문제가 생기면 아래 명령어 순서대로 점검하세요:

npm run dev
npm run build
npm run deploy

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: 800,
        margin: "auto",
        padding: 20,
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Frontend Developer & React Enthusiast</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          안녕하세요! 저는 React와 Vite로 만든 간단한 포트폴리오 사이트입니다.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project A:</strong> React + Vite 기반 웹앱
          </li>
          <li>
            <strong>Project B:</strong> 개인 블로그 사이트
          </li>
          <li>
            <strong>Project C:</strong> JavaScript 게임 프로젝트
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
      </section>
    </div>
  );
}

export default App;

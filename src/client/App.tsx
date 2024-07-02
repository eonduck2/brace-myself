import React from "react";
import Header from "./components/header/Header";
import "../styles/input.css";
import Main from "./components/main/Main";

const App: React.FC = () => {
  const texts = [
    "1. 템포 조절하기",
    "2. 후회를 남기지 않기",
    "3. 상대방을 이해하기",
    "4. 문서와 친한 척 하기",
    "5. 미련 갖지 않기",
    "6. 우울해하지 않기",
  ];
  return (
    <>
      <Header />
      {/* <Main/> */}
      <main>
        {texts.map((text, index) => (
          <h1 key={index}>{text}</h1>
        ))}
      </main>
    </>
  );
};

export default App;

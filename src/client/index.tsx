import React from "react";
import { createRoot } from "react-dom/client";

// !---------------------
// import ReactDOM from "react-dom";
// !---------------------

import App from "./App";

// * 리액트 18 버전 이상 렌더링 방식
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ! 리액트 17 버전 렌더링 방식(18 버전에서 지원 X)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// ! ----------------------------------

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

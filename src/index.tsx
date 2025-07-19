import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext } from "styled-components";
import { light } from "./style/theme";

async function mountApp() {
  
  if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  await worker.start({
    onUnhandledRequest: "warn",
  }).then(() => {
    console.log("[MSW] worker started!"); // 이 로그 꼭 찍혀야 함
  });
}

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ThemeContext.Provider value={light}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

mountApp();
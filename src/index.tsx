import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext } from "styled-components";
import { light } from "./style/theme";

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

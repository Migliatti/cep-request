import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PrincipalPage from "./pages/PrincipalPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrincipalPage />
  </React.StrictMode>
);

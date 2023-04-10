import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Form from "./components/Form";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

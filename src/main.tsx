import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import {Navbar} from "./nav/Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
);

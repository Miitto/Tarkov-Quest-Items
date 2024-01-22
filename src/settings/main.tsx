import ReactDOM from "react-dom/client";
import { SettingsPage } from "./Settings";
import React from "react";
import "../styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SettingsPage />
    </React.StrictMode>
);

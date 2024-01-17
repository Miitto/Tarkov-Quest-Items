import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import { WipePanel } from "./nav/WipePanel";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquarePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faSquarePlus, faTrash);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <WipePanel />
        <App />
    </React.StrictMode>
);

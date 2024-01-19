import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSquarePlus,
    faTrash,
    faCircleCheck,
    faChevronUp,
    faChevronDown,
    faMinus,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faSquarePlus,
    faTrash,
    faCircleCheck,
    faChevronUp,
    faChevronDown,
    faMinus,
    faPlus
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

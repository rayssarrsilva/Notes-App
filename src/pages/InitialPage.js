// Initial page
// Add task

import Header from "../dom/Header.js";
import header from "../dom/Header.js";

export default function InitialPage() {
    const page = document.createElement("main");

    page.append(
        Header()
    );

    page.classList.add("main-initial");

    return page;
}
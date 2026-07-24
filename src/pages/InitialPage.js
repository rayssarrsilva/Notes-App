// Initial page
// Add task

import Header from "../dom/Header.js";

export default function InitialPage(NavigationApp) {
    
    const page = document.createElement("main");

    page.append(
        Header(NavigationApp)
    );

    page.classList.add("main-initial");

    return page;
}
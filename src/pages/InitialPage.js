// Initial page
// Add task

import Header from "../dom/Header.js";
import InitialPageView from "../dom/InitialPageView.js";


export default function InitialPage(navigation) {

    const page = document.createElement("main");

    page.classList.add("main-initial");


    page.append(
        Header(navigation),
        InitialPageView()
    );


    return page;
}
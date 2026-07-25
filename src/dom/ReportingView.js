const sampleResults = ["Study", "Study", "Study", "Study", "Study", "Study"];

function createResultRow(text) {
    const row = document.createElement("div");
    row.classList.add("reporting-item");
    row.textContent = text;
    return row;
}

export default function ReportingView() {
    const content = document.createElement("section");
    content.classList.add("reporting-content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;";

    titleContainer.append(title, titleArrow);

    const card = document.createElement("section");
    card.classList.add("reporting-card");

    const header = document.createElement("div");
    header.classList.add("reporting-header");
    header.textContent = "FILTER";

    const toolbar = document.createElement("div");
    toolbar.classList.add("reporting-toolbar");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.classList.add("task-search");

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.classList.add("search-button");

    toolbar.append(searchInput, searchButton);

    const list = document.createElement("div");
    list.classList.add("reporting-list");
    list.id = "reporting-list";

    sampleResults.forEach(text => list.append(createResultRow(text)));

    card.append(header, toolbar, list);

    const badge = document.createElement("div");
    badge.classList.add("reporting-badge");

    content.append(titleContainer, card, badge);

    return content;
}
// dom/MyTasksView.js
// Só monta o "casco" da página (título, toolbar, container da lista).
// O preenchimento real da lista é feito pelo TaskController.bindMyTasksPage.

export default function MyTasksView() {
    const content = document.createElement("section");
    content.classList.add("mytasks-content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;";

    titleContainer.append(title, titleArrow);

    const panel = document.createElement("section");
    panel.classList.add("mytasks-panel");

    const toolbar = document.createElement("div");
    toolbar.classList.add("task-toolbar");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "";
    searchInput.classList.add("task-search");

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.classList.add("search-button");

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-button");

    toolbar.append(searchInput, searchButton, editButton);

    const list = document.createElement("div");
    list.classList.add("mytasks-list");
    list.id = "mytasks-list";

    panel.append(toolbar, list);
    content.append(titleContainer, panel);

    return content;
}
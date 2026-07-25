// dom/ProjectView.js
// Content of the "Respective Project" page — nome, descrição, busca e as
// tasks atreladas a este projeto. O preenchimento da lista é feito pelo
// TaskController.bindProjectTasksPage.

export default function ProjectView(project) {
    const content = document.createElement("section");
    content.classList.add("project-content");

    const panel = document.createElement("section");
    panel.classList.add("project-panel");

    const header = document.createElement("div");
    header.classList.add("project-header");

    const title = document.createElement("h1");
    title.classList.add("project-title");
    title.textContent = project?.name ?? "";

    const toolbar = document.createElement("div");
    toolbar.classList.add("task-toolbar");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.classList.add("task-search");

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.classList.add("search-button");
    searchButton.innerHTML = "&#128065;";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-button");
    editButton.innerHTML = "&#9998;";

    toolbar.append(searchInput, searchButton, editButton);
    header.append(title, toolbar);

    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project?.description || "";

    const list = document.createElement("div");
    list.classList.add("task-list");
    list.id = "task-list";

    panel.append(header, description, list);
    content.append(panel);

    return content;
}
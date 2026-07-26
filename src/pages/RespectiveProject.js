// pages/RespectiveProject.js
// Página de detalhe de um projeto: header do app, nome do projeto,
// descrição (inserida na criação) e as tasks vinculadas a ele.

import Header from "../dom/Header.js";

export default function RespectiveProjectPage(app, project) {
    const page = document.createElement("div");
    page.className = "respectiveproject-page";

    const header = Header(app);

    const content = document.createElement("div");
    content.className = "respectiveproject-content";

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "respectiveproject-back-button";
    backButton.textContent = "← My Projects";
    backButton.addEventListener("click", () => app.MyProjectsPage());

    const title = document.createElement("h1");
    title.className = "title-app";

    const titleText = document.createElement("span");
    titleText.textContent = project?.name ?? "Project";

    const arrow = document.createElement("span");
    arrow.className = "title-arrow";
    arrow.textContent = "→";

    title.append(titleText, arrow);
    titleContainer.append(backButton, title);

    const card = document.createElement("div");
    card.className = "respectiveproject-card";

    const description = document.createElement("p");
    description.className = "respectiveproject-description";
    const hasDescription = Boolean(project?.description?.trim());
    description.textContent = hasDescription
        ? project.description
        : "No description added for this project.";
    if (!hasDescription) description.classList.add("is-empty");

    card.append(description);

    const panel = document.createElement("div");
    panel.className = "respectiveproject-panel";

    const toolbar = document.createElement("div");
    toolbar.className = "task-toolbar";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "task-search";
    searchInput.placeholder = "Search tasks in this project...";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "edit-button";
    editButton.title = "Edit project";
    editButton.setAttribute("aria-label", "Edit project");

    toolbar.append(searchInput, editButton);

    const list = document.createElement("ul");
    list.id = "task-list";
    list.className = "respectiveproject-list";

    panel.append(toolbar, list);

    content.append(titleContainer, card, panel);
    page.append(header, content);

    return page;
}
import Project from "../models/project.js";

function getSampleProjects() {
    return ["vision board", "Work", "Study"].map(name => new Project(name, ""));
}

function createProjectRow(project) {
    const row = document.createElement("div");
    row.classList.add("myprojects-item");
    row.dataset.id = project.id;

    const name = document.createElement("span");
    name.classList.add("myprojects-item-name");
    name.textContent = project.name;

    const viewBtn = document.createElement("button");
    viewBtn.type = "button";
    viewBtn.classList.add("view-project");
    viewBtn.setAttribute("aria-label", "view project");

    row.append(name, viewBtn);
    return row;
}

export default function MyProjectsView() {
    const content = document.createElement("section");
    content.classList.add("myprojects-content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container", "title-container-center");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;";

    titleContainer.append(title, titleArrow);

    const card = document.createElement("section");
    card.classList.add("myprojects-card");

    const header = document.createElement("div");
    header.classList.add("myprojects-header");
    header.innerHTML = "<span class='myprojects-icon'></span> My projects";

    const listBox = document.createElement("div");
    listBox.classList.add("myprojects-list");
    listBox.id = "myprojects-list";

    getSampleProjects().forEach(project => listBox.append(createProjectRow(project)));

    card.append(header, listBox);
    content.append(titleContainer, card);

    return content;
}
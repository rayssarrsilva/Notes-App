// AddProjectView.js
// Content of the "Add Project" page
// Sugestão de caminho: dom/addproject/AddProjectView.js
import Project from "../models/project.js";

function getSampleProjects() {
    return ["Vision Board", "Study", "Work"].map(name => new Project(name, ""));
}

export default function AddProjectView() {
    const content = document.createElement("section");
    content.classList.add("addproject-content");

    const leftPanel = document.createElement("section");
    leftPanel.classList.add("left-panel");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;";

    titleContainer.append(title, titleArrow);

    const form = document.createElement("form");
    form.classList.add("project-form");

    const projectName = document.createElement("input");
    projectName.type = "text";
    projectName.placeholder = "Enter project name..";
    projectName.classList.add("project-name");

    const description = document.createElement("textarea");
    description.placeholder = "Type your project description...";
    description.classList.add("project-description");

    const formActions = document.createElement("div");
    formActions.classList.add("form-actions");

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.innerHTML = "<span class='btn-icon'>&times;</span> Cancel";
    cancel.classList.add("cancel-task-button");

    const addProject = document.createElement("button");
    addProject.type = "submit";
    addProject.innerHTML = "<span class='btn-icon'>+</span> Add Project";
    addProject.classList.add("add-task-button");

    formActions.append(cancel, addProject);
    form.append(projectName, description, formActions);
    leftPanel.append(titleContainer, form);

    const rightPanel = document.createElement("section");
    rightPanel.classList.add("right-panel");

    const toolbar = document.createElement("div");
    toolbar.classList.add("task-toolbar");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.classList.add("task-search");

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.classList.add("search-button");

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-button");

    toolbar.append(searchInput, searchButton, editButton);

    const list = document.createElement("ol");
    list.classList.add("addproject-list");
    list.id = "addproject-list";

    getSampleProjects().forEach(project => {
        const li = document.createElement("li");
        li.classList.add("addproject-item");
        li.dataset.id = project.id;

        const name = document.createElement("span");
        name.textContent = project.name;

        const viewBtn = document.createElement("button");
        viewBtn.type = "button";
        viewBtn.classList.add("view-project");

        li.append(name, viewBtn);
        list.append(li);
    });

    rightPanel.append(toolbar, list);
    content.append(leftPanel, rightPanel);

    return content;
}
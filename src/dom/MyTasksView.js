import Task from "../models/task.js";
import EditTaskView from "./EditTaskView.js";

function getSampleTasks() {
    const names = [
        "get that report on johnson's desk",
        "get that report on johnson's desk",
        "get that report on johnson's desk",
        "get that report on johnson's desk",
        "get that report on johnson's desk",
        "get that report on johnson's desk",
    ];

    return names.map((name, i) => {
        const task = new Task(name, "", "", "medium", "");
        task.complete = i === 1; 
        return task;
    });
}

function createTaskItem(task) {
    const item = document.createElement("div");
    item.classList.add("task-item");
    item.dataset.id = task.id;
    if (task.complete) item.classList.add("completed");

    const checkbox = document.createElement("button");
    checkbox.type = "button";
    checkbox.classList.add("task-item-checkbox");
    checkbox.setAttribute("aria-label", "toggle complete");

    const text = document.createElement("span");
    text.classList.add("task-item-text");
    text.textContent = task.name;

    const actions = document.createElement("div");
    actions.classList.add("task-item-actions");

    const openEditModal = () => {
        const modal = EditTaskView(task, {
            onSave: (updated) => {
                Object.assign(task, updated);
                text.textContent = task.name;
            },
            onCancel: () => {},
        });
        document.body.append(modal);
    };

    const viewBtn = document.createElement("button");
    viewBtn.type = "button";
    viewBtn.classList.add("view-task");
    viewBtn.setAttribute("aria-label", "view task");
    viewBtn.addEventListener("click", openEditModal);

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("edit-task");
    editBtn.setAttribute("aria-label", "edit task");
    editBtn.addEventListener("click", openEditModal);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-task");
    deleteBtn.setAttribute("aria-label", "delete task");
    deleteBtn.addEventListener("click", () => item.remove());

    actions.append(viewBtn, editBtn, deleteBtn);
    item.append(checkbox, text, actions);

    return item;
}

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

    getSampleTasks().forEach(task => list.append(createTaskItem(task)));

    panel.append(toolbar, list);
    content.append(titleContainer, panel);

    return content;
}
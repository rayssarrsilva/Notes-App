// InitialPageView.js
// Content of Initial Page / Add Task

export default function InitialPageView() {

    const content = document.createElement("section");
    content.classList.add("initial-content");

    const leftPanel = document.createElement("section");
    leftPanel.classList.add("left-panel");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const form = document.createElement("form");
    form.classList.add("task-form");

    const taskName = document.createElement("input");
    taskName.type = "text";
    taskName.placeholder = "Enter task name...";
    taskName.classList.add("task-name");

    const description = document.createElement("textarea");
    description.placeholder = "Type your task description...";
    description.classList.add("task-description");


    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.classList.add("task-date");

    const priority = document.createElement("select");
    priority.classList.add("task-priority");

    ["Low", "Medium", "High"].forEach(level => {

        const option = document.createElement("option");

        option.value = level;
        option.textContent = level;

        priority.append(option);
    });

    const projects = document.createElement("select");
    projects.classList.add("task-project");

    const defaultProject = document.createElement("option");
    defaultProject.textContent = "Project";
    defaultProject.value = "";

    projects.append(defaultProject);

    const cancel = document.createElement("button");

    cancel.type = "button";
    cancel.textContent = "Cancel";
    cancel.classList.add("cancel-task-button");

    const addTask = document.createElement("button");

    addTask.type = "submit";
    addTask.textContent = "Add Task";
    addTask.classList.add("add-task-button");

    form.append(
        taskName,
        description,
        endDate,
        priority,
        projects,
        cancel,
        addTask
    );


    leftPanel.append(
        title,
        form
    );

    const rightPanel = document.createElement("section");

    rightPanel.classList.add("right-panel");

    const toolbar = document.createElement("div");

    toolbar.classList.add("task-toolbar");

    const search = document.createElement("input");

    search.type = "text";
    search.placeholder = "Search";
    search.classList.add("task-search");

    const searchButton = document.createElement("button");

    searchButton.type = "button";
    searchButton.classList.add("search-button");

    const editButton = document.createElement("button");

    editButton.type = "button";
    editButton.classList.add("edit-button");

    toolbar.append(
        search,
        searchButton,
        editButton
    );

    const taskList = document.createElement("section");

    taskList.classList.add("task-list");

    taskList.id = "task-list";

    rightPanel.append(
        toolbar,
        taskList
    );

    content.append(
        leftPanel,
        rightPanel
    );


    return content;
}
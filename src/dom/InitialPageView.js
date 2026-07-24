// InitialPageView.js
// Content of Initial Page / Add Task

export default function InitialPageView() {
    const content = document.createElement("section");
    content.classList.add("initial-content");

    // ==========================================
    // LEFT PANEL (Title + Form Card)
    // ==========================================
    const leftPanel = document.createElement("section");
    leftPanel.classList.add("left-panel");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    // Seta decorativa apontando para a direita abaixo do título
    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;"; 

    titleContainer.append(title, titleArrow);

    // Form Container (Card Branco)
    const form = document.createElement("form");
    form.classList.add("task-form");

    // Conteúdo superior do Form (split em 2 colunas)
    const formBody = document.createElement("div");
    formBody.classList.add("form-body");

    // Coluna Esquerda do Form (Nome e Descrição)
    const formLeftCol = document.createElement("div");
    formLeftCol.classList.add("form-left-col");

    const taskName = document.createElement("input");
    taskName.type = "text";
    taskName.placeholder = "Enter task name..";
    taskName.classList.add("task-name");

    const description = document.createElement("textarea");
    description.placeholder = "Type your task description...";
    description.classList.add("task-description");

    formLeftCol.append(taskName, description);

    // Coluna Direita do Form (End Date, Priority, Projects)
    const formRightCol = document.createElement("div");
    formRightCol.classList.add("form-right-col");

    // Group: End Date
    const endDateGroup = document.createElement("div");
    endDateGroup.classList.add("form-group");
    const endDateLabel = document.createElement("label");
    endDateLabel.textContent = "end date";
    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.classList.add("task-date");
    endDateGroup.append(endDateLabel, endDate);

    // Group: Priority
    const priorityGroup = document.createElement("div");
    priorityGroup.classList.add("form-group");
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    
    // Ícone decorativo ao lado do Priority (opcional)
    const priorityIcon = document.createElement("span");
    priorityIcon.classList.add("priority-icon");
    priorityIcon.innerHTML = "&#10010;"; 
    
    const prioritySelect = document.createElement("select");
    prioritySelect.classList.add("task-priority");

    ["Low", "Medium", "High"].forEach(level => {
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.textContent = level;
        prioritySelect.append(option);
    });
    
    const priorityLabelContainer = document.createElement("div");
    priorityLabelContainer.classList.add("priority-label-container");
    priorityLabelContainer.append(priorityLabel, priorityIcon);

    priorityGroup.append(priorityLabelContainer, prioritySelect);

    // Group: Projects
    const projectsGroup = document.createElement("div");
    projectsGroup.classList.add("form-group");
    const projectsLabel = document.createElement("label");
    projectsLabel.textContent = "Projects";
    
    const projectsSelect = document.createElement("select");
    projectsSelect.classList.add("task-project");

    const defaultProject = document.createElement("option");
    defaultProject.textContent = "Select Project";
    defaultProject.value = "";
    projectsSelect.append(defaultProject);
    
    projectsGroup.append(projectsLabel, projectsSelect);

    formRightCol.append(endDateGroup, priorityGroup, projectsGroup);

    formBody.append(formLeftCol, formRightCol);

    // Ações do Form (Footer com Cancel e Add Task)
    const formActions = document.createElement("div");
    formActions.classList.add("form-actions");

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.innerHTML = "<span class='btn-icon'>&times;</span> Cancel";
    cancel.classList.add("cancel-task-button");

    const addTask = document.createElement("button");
    addTask.type = "submit";
    addTask.innerHTML = "<span class='btn-icon'>+</span> Add Task";
    addTask.classList.add("add-task-button");

    formActions.append(cancel, addTask);

    form.append(formBody, formActions);
    leftPanel.append(titleContainer, form);

    // ==========================================
    // RIGHT PANEL (Toolbar + Notebook List)
    // ==========================================
    const rightPanel = document.createElement("section");
    rightPanel.classList.add("right-panel");

    const toolbar = document.createElement("div");
    toolbar.classList.add("task-toolbar");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "";
    searchInput.classList.add("task-search");

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.classList.add("search-button");
    searchButton.innerHTML = "&#128065;"; // Ícone do olho / lupa

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-button");
    editButton.innerHTML = "&#9998;"; // Ícone de lápis

    toolbar.append(searchInput, searchButton, editButton);

    const taskList = document.createElement("section");
    taskList.classList.add("task-list");
    taskList.id = "task-list";

    rightPanel.append(toolbar, taskList);

    // ==========================================
    // MAIN CONTENT ASSEMBLY
    // ==========================================
    content.append(leftPanel, rightPanel);

    return content;
}
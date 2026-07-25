export default function EditTaskView(task, { onSave, onCancel, projects = [] } = {}) {

    const overlay = document.createElement("div");
    overlay.classList.add("edittask-overlay");

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
            onCancel && onCancel();
        }
    });

    const card = document.createElement("div");
    card.classList.add("edittask-card");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("edittask-name");
    nameInput.value = task?.name ?? "";

    const body = document.createElement("div");
    body.classList.add("edittask-body");

    const description = document.createElement("textarea");
    description.classList.add("edittask-description");
    description.value = task?.description ?? "";

    const infoCol = document.createElement("div");
    infoCol.classList.add("edittask-info-col");

    const endDateGroup = document.createElement("div");
    endDateGroup.classList.add("edittask-info-group");
    const endDateLabel = document.createElement("label");
    endDateLabel.textContent = "End date";
    const endDateInput = document.createElement("input");
    endDateInput.type = "date";
    endDateInput.classList.add("edittask-date");
    endDateInput.value = task?.endDate || "";
    endDateGroup.append(endDateLabel, endDateInput);

    const priorityGroup = document.createElement("div");
    priorityGroup.classList.add("edittask-info-group");
    const priorityLabel = document.createElement("span");
    priorityLabel.classList.add("edittask-label");
    priorityLabel.textContent = "Priority";

    const priorityOptions = document.createElement("div");
    priorityOptions.classList.add("edittask-priority-options");
    priorityOptions.style.display = "flex";
    priorityOptions.style.gap = "6px";

    let selectedPriority = task?.priority || "medium";

    const priorityColors = {
        high: "#e5484d",
        medium: "#f5c518",
        low: "#3fb950",
    };

    const priorityButtons = {};

    Object.keys(priorityColors).forEach((level) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("priority-dot", `priority-${level}`);
        btn.title = level.charAt(0).toUpperCase() + level.slice(1);
        btn.style.width = "22px";
        btn.style.height = "22px";
        btn.style.borderRadius = "50%";
        btn.style.border = "2px solid transparent";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = priorityColors[level];
        btn.style.opacity = selectedPriority === level ? "1" : "0.35";
        btn.style.outline = selectedPriority === level ? "2px solid #333" : "none";

        btn.addEventListener("click", () => {
            selectedPriority = level;
            Object.entries(priorityButtons).forEach(([lvl, b]) => {
                b.style.opacity = lvl === level ? "1" : "0.35";
                b.style.outline = lvl === level ? "2px solid #333" : "none";
            });
        });

        priorityButtons[level] = btn;
        priorityOptions.append(btn);
    });

    priorityGroup.append(priorityLabel, priorityOptions);

    const projectGroup = document.createElement("div");
    projectGroup.classList.add("edittask-info-group");
    const projectLabel = document.createElement("label");
    projectLabel.textContent = "Project";

    const projectSelect = document.createElement("select");
    projectSelect.classList.add("edittask-project");

    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No project";
    projectSelect.append(emptyOption);

    projects.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;
        if (project.name === task?.projects) option.selected = true;
        projectSelect.append(option);
    });

    projectGroup.append(projectLabel, projectSelect);

    infoCol.append(endDateGroup, priorityGroup, projectGroup);
    body.append(description, infoCol);

    const actions = document.createElement("div");
    actions.classList.add("edittask-actions");

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.classList.add("cancel-task-button");
    cancelBtn.innerHTML = "<span class='btn-icon'>&times;</span> Cancel";
    cancelBtn.addEventListener("click", () => {
        overlay.remove();
        onCancel && onCancel();
    });

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.classList.add("add-task-button");
    saveBtn.innerHTML = "<span class='btn-icon'>+</span> Save";
    saveBtn.addEventListener("click", () => {
        const updated = {
            name: nameInput.value,
            description: description.value,
            endDate: endDateInput.value,
            priority: selectedPriority,
            projects: projectSelect.value,
        };
        overlay.remove();
        onSave && onSave(updated);
    });

    actions.append(cancelBtn, saveBtn);

    card.append(nameInput, body, actions);
    overlay.append(card);

    return overlay;
}
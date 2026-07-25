export default function EditTaskView(task, { onSave, onCancel } = {}) {

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
    const endDate = document.createElement("span");
    endDate.classList.add("edittask-date");
    endDate.textContent = task?.endDate || "dd/mm/aaaa";
    endDateGroup.append(endDate);

    const priorityGroup = document.createElement("div");
    priorityGroup.classList.add("edittask-info-group");
    const priorityLabel = document.createElement("span");
    priorityLabel.classList.add("edittask-label");
    priorityLabel.textContent = "Priority";
    const priorityIcon = document.createElement("span");
    priorityIcon.classList.add("priority-icon");
    priorityIcon.innerHTML = "&#10010;";
    priorityGroup.append(priorityLabel, priorityIcon);

    const projectGroup = document.createElement("div");
    projectGroup.classList.add("edittask-info-group");
    const projectLabel = document.createElement("span");
    projectLabel.classList.add("edittask-label");
    projectLabel.textContent = "Project:";
    const projectValue = document.createElement("span");
    projectValue.classList.add("edittask-project-value");
    projectValue.textContent = task?.projects || "—";
    projectGroup.append(projectLabel, projectValue);

    infoCol.append(endDateGroup, priorityGroup, projectGroup);
    body.append(description, infoCol);

    // Actions
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
        };
        overlay.remove();
        onSave && onSave(updated);
    });

    actions.append(cancelBtn, saveBtn);

    card.append(nameInput, body, actions);
    overlay.append(card);

    return overlay;
}
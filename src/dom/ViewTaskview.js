export default function ViewTaskView(task, { onClose, onEdit } = {}) {
    const overlay = document.createElement("div");
    overlay.classList.add("edittask-overlay");

    const close = () => {
        overlay.remove();
        onClose && onClose();
    };

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
    });

    const card = document.createElement("div");
    card.classList.add("edittask-card");

    const name = document.createElement("h2");
    name.classList.add("edittask-name");
    name.textContent = task?.name ?? "";

    const body = document.createElement("div");
    body.classList.add("edittask-body");

    const description = document.createElement("p");
    description.classList.add("edittask-description");
    description.textContent = task?.description || "No description.";

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
    priorityLabel.textContent = `Priority: ${task?.priority || "—"}`;
    priorityGroup.append(priorityLabel);

    const projectGroup = document.createElement("div");
    projectGroup.classList.add("edittask-info-group");
    const projectValue = document.createElement("span");
    projectValue.classList.add("edittask-project-value");
    projectValue.textContent = `Project: ${task?.projects || "—"}`;
    projectGroup.append(projectValue);

    infoCol.append(endDateGroup, priorityGroup, projectGroup);
    body.append(description, infoCol);

    const actions = document.createElement("div");
    actions.classList.add("edittask-actions");

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.classList.add("cancel-task-button");
    closeBtn.innerHTML = "<span class='btn-icon'>&times;</span> Close";
    closeBtn.addEventListener("click", close);

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("add-task-button");
    editBtn.innerHTML = "<span class='btn-icon'>&#9998;</span> Edit";
    editBtn.addEventListener("click", () => {
        overlay.remove();
        onEdit && onEdit(task);
    });

    actions.append(closeBtn, editBtn);

    card.append(name, body, actions);
    overlay.append(card);

    return overlay;
}
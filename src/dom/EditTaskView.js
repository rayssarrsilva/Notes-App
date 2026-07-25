import { createPriorityPicker } from "./PriorityPicker.js";

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

    const priorityPicker = createPriorityPicker(task?.priority || "medium");

    priorityGroup.append(priorityLabel, priorityPicker.element);

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
            priority: priorityPicker.getValue(),
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
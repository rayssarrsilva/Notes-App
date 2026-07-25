// dom/TaskItemView.js
// Renderiza uma linha de task (checkbox, nome, ações). Usado pelo TaskController
// tanto na página Add Task (#task-list) quanto na My Tasks (#mytasks-list).

export function createTaskItem(task, handlers = {}) {
    const { onToggle, onDelete, onView, onEdit } = handlers;

    const item = document.createElement("div");
    item.classList.add("task-item");
    item.dataset.id = task.id;
    if (task.complete) item.classList.add("completed");

    const checkbox = document.createElement("button");
    checkbox.type = "button";
    checkbox.classList.add("task-item-checkbox");
    checkbox.setAttribute("aria-label", "toggle complete");
    checkbox.addEventListener("click", () => onToggle && onToggle(task));

    const text = document.createElement("span");
    text.classList.add("task-item-text");
    text.textContent = task.name;

    const actions = document.createElement("div");
    actions.classList.add("task-item-actions");

    const viewBtn = document.createElement("button");
    viewBtn.type = "button";
    viewBtn.classList.add("view-task");
    viewBtn.setAttribute("aria-label", "view task");
    viewBtn.addEventListener("click", () => onView && onView(task));

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("edit-task");
    editBtn.setAttribute("aria-label", "edit task");
    editBtn.addEventListener("click", () => onEdit && onEdit(task));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-task");
    deleteBtn.setAttribute("aria-label", "delete task");
    deleteBtn.addEventListener("click", () => onDelete && onDelete(task));

    actions.append(viewBtn, editBtn, deleteBtn);
    item.append(checkbox, text, actions);

    return item;
}
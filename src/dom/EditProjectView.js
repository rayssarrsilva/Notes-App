// dom/EditProjectView.js
// Modal de editar/apagar projeto. Reaproveita as mesmas classes CSS
// do EditTaskView (edittask-overlay, edittask-card etc), então não
// precisa de nenhum CSS novo.

export default function EditProjectView(project, { onSave, onDelete, onCancel } = {}) {
    const overlay = document.createElement("div");
    overlay.classList.add("edittask-overlay");

    const close = () => {
        overlay.remove();
        onCancel && onCancel();
    };

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
    });

    const card = document.createElement("div");
    card.classList.add("edittask-card");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("edittask-name");
    nameInput.value = project?.name ?? "";

    const body = document.createElement("div");
    body.classList.add("edittask-body");

    const description = document.createElement("textarea");
    description.classList.add("edittask-description");
    description.value = project?.description ?? "";

    body.append(description);

    const actions = document.createElement("div");
    actions.classList.add("edittask-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("cancel-task-button");
    deleteBtn.innerHTML = "<span class='btn-icon'>&times;</span> Delete";
    deleteBtn.addEventListener("click", () => {
        overlay.remove();
        onDelete && onDelete();
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

    actions.append(deleteBtn, saveBtn);
    card.append(nameInput, body, actions);
    overlay.append(card);

    return overlay;
}
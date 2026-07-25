// dom/ProjectItemView.js
// Renderiza uma linha de projeto (nome + editar + apagar).
// Clicar no nome abre a página do projeto; o lápis abre o modal de editar.

export function createProjectItem(project, handlers = {}) {
    const { onOpen, onEdit, onDelete } = handlers;

    const row = document.createElement("div");
    row.classList.add("myprojects-item", "addproject-item");
    row.dataset.id = project.id;

    const name = document.createElement("span");
    name.classList.add("myprojects-item-name");
    name.textContent = project.name;
    name.style.cursor = "pointer";
    name.addEventListener("click", () => onOpen && onOpen(project));

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("view-project");
    editBtn.setAttribute("aria-label", "edit project");
    editBtn.innerHTML = "&#9998;";
    editBtn.addEventListener("click", () => onEdit && onEdit(project));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-project");
    deleteBtn.setAttribute("aria-label", "delete project");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", () => onDelete && onDelete(project));

    row.append(name, editBtn, deleteBtn);
    return row;
}
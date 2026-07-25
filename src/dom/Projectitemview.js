// dom/ProjectItemView.js
// Renderiza uma linha de projeto (nome + ver + apagar).
// O olho abre a página do projeto (nome, descrição e tasks dele).
// Editar o projeto agora acontece dentro dessa página (lápis do toolbar).

export function createProjectItem(project, handlers = {}) {
    const { onOpen, onDelete } = handlers;

    const row = document.createElement("div");
    row.classList.add("myprojects-item", "addproject-item");
    row.dataset.id = project.id;

    const name = document.createElement("span");
    name.classList.add("myprojects-item-name");
    name.textContent = project.name;
    name.style.cursor = "pointer";
    name.addEventListener("click", () => onOpen && onOpen(project));

    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.classList.add("view-project");
    openBtn.setAttribute("aria-label", "view project");
    openBtn.addEventListener("click", () => onOpen && onOpen(project));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-project");
    deleteBtn.setAttribute("aria-label", "delete project");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", () => onDelete && onDelete(project));

    row.append(name, openBtn, deleteBtn);
    return row;
}
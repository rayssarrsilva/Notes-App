// dom/ProjectItemView.js
// Renderiza uma linha de projeto — reutilizado tanto na lista de
// "Add Project" (#addproject-list) quanto em "My Projects"
// (#myprojects-list). Como o CSS estiliza os dois contextos de forma
// diferente (addproject-item tem numeração; myprojects-item não),
// o listType decide qual classe usar no <li>.

export function createProjectItem(project, handlers = {}, listType = "myprojects") {
    const isAddProjectList = listType === "addproject";

    const item = document.createElement("li");
    item.className = isAddProjectList ? "addproject-item" : "myprojects-item";
    item.dataset.projectId = project.id;

    const name = document.createElement("span");
    if (!isAddProjectList) name.className = "myprojects-item-name";
    name.textContent = project.name;

    const viewBtn = document.createElement("button");
    viewBtn.type = "button";
    viewBtn.className = "view-project";
    viewBtn.title = `View ${project.name}`;
    viewBtn.setAttribute("aria-label", `View ${project.name}`);
    viewBtn.addEventListener("click", () => handlers.onView?.(project));

    item.append(name, viewBtn);
    return item;
}
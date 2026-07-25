// controllers/ProjectController.js
// Ponte entre ProjectService (dados/regras) e as views (HTML puro).
import Project from "../models/project.js";
import EditProjectView from "../dom/EditProjectView.js";
import { createProjectItem } from "../dom/ProjectItemView.js";

export default class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }

    getProjects() {
        return this.projectService.getProjectList();
    }

    getItemHandlers(refresh) {
        return {
            onEdit: (project) => this.openEditModal(project, refresh),
            onDelete: (project) => {
                this.projectService.removeProject(project.id);
                refresh();
            },
        };
    }

    openEditModal(project, refresh) {
        const modal = EditProjectView(project, {
            onSave: (updates) => {
                this.projectService.updateProject(project.id, updates);
                refresh();
            },
            onDelete: () => {
                this.projectService.removeProject(project.id);
                refresh();
            },
            onCancel: () => {},
        });
        document.body.append(modal);
    }

    renderInto(listEl, refresh, { filterText = "" } = {}) {
        if (!listEl) return;
        listEl.replaceChildren();

        const query = filterText.trim().toLowerCase();
        const handlers = this.getItemHandlers(refresh);

        this.getProjects()
            .filter(project => !query || project.name.toLowerCase().includes(query))
            .forEach(project => listEl.append(createProjectItem(project, handlers)));
    }

    bindAddProjectPage(containerEl) {
        const form = containerEl.querySelector(".project-form");
        const list = containerEl.querySelector("#addproject-list");
        const searchInput = containerEl.querySelector(".task-search");

        const refresh = () =>
            this.renderInto(list, refresh, { filterText: searchInput?.value || "" });
        refresh();

        searchInput?.addEventListener("input", refresh);

        if (!form) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = form.querySelector(".project-name")?.value.trim();
            if (!name) return;

            const description = form.querySelector(".project-description")?.value ?? "";

            this.projectService.addProject(new Project(name, description));
            form.reset();
            refresh();
        });

        const cancelBtn = form.querySelector(".cancel-task-button");
        cancelBtn?.addEventListener("click", () => form.reset());
    }

    bindMyProjectsPage(containerEl) {
        const list = containerEl.querySelector("#myprojects-list");
        const searchInput = containerEl.querySelector(".task-search");

        const refresh = () =>
            this.renderInto(list, refresh, { filterText: searchInput?.value || "" });
        refresh();

        searchInput?.addEventListener("input", refresh);
    }
}
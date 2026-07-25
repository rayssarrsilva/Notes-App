// controllers/ProjectController.js
export default class ProjectController {
    constructor(projectService, viewElement) {
        this.projectService = projectService;
        this.view = viewElement;

        this.form = this.view.querySelector(".project-form");
        this.projectNameInput = this.view.querySelector(".project-name");
        this.projectListContainer = this.view.querySelector("#project-list");

        this.init();
    }

    init() {
        this.bindEvents();
        this.renderProjects();
    }

    bindEvents() {
        if (this.form) {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.handleAddProject();
            });
        }
    }

    handleAddProject() {
        const name = this.projectNameInput.value.trim();
        if (!name) return;

        if (typeof this.projectService.addProject === "function") {
            this.projectService.addProject(name);
        }

        this.form.reset();
        this.renderProjects();
    }

    renderProjects() {
        if (!this.projectListContainer) return;
        this.projectListContainer.innerHTML = "";

        const projects = this.projectService.getProjects ? this.projectService.getProjects() : [];

        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-item");
            projectCard.textContent = typeof project === "string" ? project : project.name;

            this.projectListContainer.appendChild(projectCard);
        });
    }
}
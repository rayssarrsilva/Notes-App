import InitialPage from "../pages/InitialPage.js";
import MyTasksPage from "../pages/MyTask.js";
import MyProjectsPage from "../pages/MyProjects.js";
import AddProjectPage from "../pages/AddProject.js";
import ReportingPage from "../pages/Reporting.js";
import RespectiveProjectPage from "../pages/RespectiveProject.js";
import TaskService from "../service/taskService.js";
import ProjectService from "../service/projectService.js";
import TaskController from "../controllers/TaskController.js";
import ProjectController from "../controllers/ProjectController.js";
import ReportingController from "./ReportingController.js";

export default class NavigationApp {
    constructor(app) {
        this.app = app;

        this.TaskService = new TaskService();
        this.ProjectService = new ProjectService();

        this.reportingController = new ReportingController(this.TaskService);
        this.taskController = new TaskController(this.TaskService, this.ProjectService);
        this.projectController = new ProjectController(this.ProjectService);
    }

    render(page) {
        this.app.replaceChildren(page);
    }

    InitialPage() {
        const page = InitialPage(this);
        this.render(page);
        this.taskController.bindInitialPage(page);
    }

    MyTasksPage() {
        const page = MyTasksPage(this);
        this.render(page);
        this.taskController.bindMyTasksPage(page);
    }

    MyProjectsPage() {
        const page = MyProjectsPage(this);
        this.render(page);
        this.projectController.bindMyProjectsPage(page, {
            onOpenProject: (project) => this.RespectiveProjectPage(project),
        });
    }

    AddProjectPage() {
        const page = AddProjectPage(this);
        this.render(page);
        this.projectController.bindAddProjectPage(page, {
            onOpenProject: (project) => this.RespectiveProjectPage(project),
        });
    }

    RespectiveProjectPage(project) {
        const page = RespectiveProjectPage(this, project);
        this.render(page);
        this.taskController.bindProjectTasksPage(page, project);

        const editBtn = page.querySelector(".edit-button");
        editBtn?.addEventListener("click", () => {
            this.projectController.openEditModal(project, () => this.RespectiveProjectPage(project));
        });
    }

    ReportingPage() {
    const page = ReportingPage(this);

    this.render(page);

    this.reportingController.bindReportingPage(page);
}
}
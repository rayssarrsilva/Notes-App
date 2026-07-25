import InitialPage from "../pages/InitialPage.js";
import MyTasksPage from "../pages/MyTask.js";
import MyProjectsPage from "../pages/MyProjects.js";
import AddProjectPage from "../pages/AddProject.js";
import ReportingPage from "../pages/Reporting.js";
import TaskService from "../service/taskService.js";
import ProjectService from "../service/projectService.js";
import TaskController from "../controllers/TaskController.js";

export default class NavigationApp {
    constructor(app) {
        this.app = app;

        this.TaskService = new TaskService();
        this.ProjectService = new ProjectService();

        this.taskController = new TaskController(this.TaskService, this.ProjectService);
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
        this.render(MyProjectsPage(this));
    }

    AddProjectPage() {
        this.render(AddProjectPage(this));
    }

    ReportingPage() {
        this.render(ReportingPage(this));
    }
}
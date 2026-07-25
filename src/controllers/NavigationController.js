import InitialPage from "../pages/InitialPage.js";
import MyTasksPage from "../pages/MyTask.js";
import MyProjectsPage from "../pages/MyProjects.js";
import AddProjectPage from "../pages/AddProject.js";
import ReportingPage from "../pages/Reporting.js";

export default class NavigationApp {
    constructor(app){
        this.app = app;
    }

    render(page){
        this.app.replaceChildren(page);
    }

    InitialPage() {
        this.render(
            InitialPage(this)
        );
    }

    MyTasksPage() {
        this.render(
            MyTasksPage(this)
        );
    }

    MyProjectsPage() {
        this.render(
            MyProjectsPage(this)
        );
    }

    AddProjectPage() {
        this.render(
            AddProjectPage(this)
        );
    }

    ReportingPage() {
        this.render(
            ReportingPage(this)
        );
    }
}
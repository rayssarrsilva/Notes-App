import InitialPage from "../pages/InitialPage.js";
import MyTasksPage from "../pages/MyTasksPage.js";
import MyProjectsPage from "../pages/MyProjectsPage.js";
import AddProjectPage from "../pages/AddProjectPage.js";

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
}
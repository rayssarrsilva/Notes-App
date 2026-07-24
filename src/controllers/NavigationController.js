import InitialPage from "../pages/InitialPage.js";

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
}

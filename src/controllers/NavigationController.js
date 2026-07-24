import InitialPage from "../pages/InitialPage";

export default class Navigation {
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
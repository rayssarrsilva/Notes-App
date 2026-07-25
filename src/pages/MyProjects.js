import Header from "../dom/Header.js";
import MyProjectsView from "../dom/MyProjectsView.js";

export default function MyProjectsPage(navigationApp) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = MyProjectsView(navigationApp);

    page.append(header, content);

    return page;
}
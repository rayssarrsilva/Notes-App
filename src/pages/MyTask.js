import Header from "../dom/Header.js";
import MyTasksView from "../dom/MyTasksView.js";

export default function MyTasksPage(navigationApp) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = MyTasksView(navigationApp);

    page.append(header, content);

    return page;
}
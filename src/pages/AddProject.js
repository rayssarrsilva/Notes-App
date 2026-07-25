import Header from "../dom/Header.js";
import AddProjectView from "../dom/AddProjectView.js";

export default function AddProjectPage(navigationApp) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = AddProjectView(navigationApp);

    page.append(header, content);

    return page;
}
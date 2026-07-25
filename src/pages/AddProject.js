import Header from "../components/Header.js";
import AddProjectView from "../dom/addproject/AddProjectView.js";

export default function AddProjectPage(navigationApp) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = AddProjectView(navigationApp);

    page.append(header, content);

    return page;
}
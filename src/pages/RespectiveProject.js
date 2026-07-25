// pages/RespectiveProject.js
import Header from "../dom/Header.js";
import ProjectView from "../dom/ProjectView.js";

export default function RespectiveProjectPage(navigationApp, project) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = ProjectView(project);

    page.append(header, content);

    return page;
}
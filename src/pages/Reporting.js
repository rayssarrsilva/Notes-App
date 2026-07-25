import Header from "../dom/Header.js";
import ReportingView from "../dom/ReportingView.js";

export default function ReportingPage(navigationApp) {
    const page = document.createElement("div");

    const header = Header(navigationApp);
    const content = ReportingView(navigationApp);

    page.append(header, content);

    return page;
}
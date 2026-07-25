export default function ReportingView() {
    const content = document.createElement("section");
    content.classList.add("reporting-content");

    const card = document.createElement("section");
    card.classList.add("reporting-card");

    const title = document.createElement("h2");
    title.classList.add("reporting-header");
    title.textContent = "REPORTING";

    const toolbar = document.createElement("div");
    toolbar.classList.add("reporting-toolbar");

    const search = document.createElement("input");
    search.id = "reporting-search";
    search.classList.add("task-search");
    search.placeholder = "Task ou Projeto";

    const button = document.createElement("button");
    button.classList.add("search-button");

    toolbar.append(search, button);

    const priority = document.createElement("select");
    priority.id = "reporting-priority";

    [
        "Todas",
        "Low",
        "Medium",
        "High"
    ].forEach(text => {
        const option = document.createElement("option");
        option.value = text;
        option.textContent = text;
        priority.append(option);
    });

    // datas

    const dates = document.createElement("div");
    dates.classList.add("reporting-dates");

    const start = document.createElement("input");
    start.type = "date";
    start.id = "reporting-start";

    const end = document.createElement("input");
    end.type = "date";
    end.id = "reporting-end";

    dates.append(start, end);

    const list = document.createElement("div");
    list.id = "reporting-list";
    list.classList.add("reporting-list");

    card.append(
        title,
        toolbar,
        priority,
        dates,
        list
    );

    content.append(card);

    return content;
}
export default class ReportingController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    bindReportingPage(containerEl) {
        const searchInput = containerEl.querySelector("#reporting-search");
        const searchButton = containerEl.querySelector(".reporting-toolbar .search-button");
        const list = containerEl.querySelector("#reporting-list");

        const render = (filterText = "") => {
            if (!list) return;
            list.replaceChildren();

            const query = filterText.trim().toLowerCase();

            this.taskService.getTaskList()
                .filter(task => !query || (task.projects || "").toLowerCase().includes(query))
                .forEach(task => {
                    const row = document.createElement("div");
                    row.classList.add("reporting-item");
                    row.textContent = task.projects || "—";
                    list.append(row);
                });
        };

        render();

        searchInput?.addEventListener("input", (event) => render(event.target.value));
        searchButton?.addEventListener("click", () => render(searchInput?.value ?? ""));
    }
}
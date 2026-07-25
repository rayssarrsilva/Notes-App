export default class ReportingController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    bindReportingPage(container) {

        const search =
            container.querySelector("#reporting-search");

        const priority =
            container.querySelector("#reporting-priority");

        const start =
            container.querySelector("#reporting-start");

        const end =
            container.querySelector("#reporting-end");

        const button =
            container.querySelector(".search-button");

        const list =
            container.querySelector("#reporting-list");

        const render = () => {

            list.replaceChildren();

            const query =
                search.value.trim().toLowerCase();

            const selectedPriority =
                priority.value;

            const startDate =
                start.value
                    ? new Date(start.value)
                    : null;

            const endDate =
                end.value
                    ? new Date(end.value)
                    : null;

            const tasks = this.taskService
                .getTaskList()
                .filter(task => {

                    const matchesName =
                        !query ||

                        task.title
                            ?.toLowerCase()
                            .includes(query) ||

                        task.projects
                            ?.toLowerCase()
                            .includes(query);

                    const matchesPriority =
                        selectedPriority === "Todas" ||
                        task.priority === selectedPriority;

                    let matchesDate = true;

                    if (startDate || endDate) {

                        const due =
                            new Date(task.dueDate);

                        if (startDate)
                            matchesDate =
                                matchesDate &&
                                due >= startDate;

                        if (endDate)
                            matchesDate =
                                matchesDate &&
                                due <= endDate;
                    }

                    return (
                        matchesName &&
                        matchesPriority &&
                        matchesDate
                    );
                });

            tasks.forEach(task => {

                const item =
                    document.createElement("div");

                item.classList.add("reporting-item");

                item.innerHTML = `

                    <strong>${task.title}</strong>

                    <div>Projeto: ${task.projects}</div>

                    <div>Prioridade: ${task.priority}</div>

                    <div>Data: ${task.dueDate}</div>

                `;

                list.append(item);

            });

        };

        render();

        search.addEventListener("input", render);

        priority.addEventListener("change", render);

        start.addEventListener("change", render);

        end.addEventListener("change", render);

        button.addEventListener("click", render);

    }
}
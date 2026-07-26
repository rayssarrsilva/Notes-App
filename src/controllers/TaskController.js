// controllers/TaskController.js
// Ponte entre TaskService/ProjectService (dados/regras) e as Views (HTML puro).
import Task from "../models/task.js";
import EditTaskView from "../dom/EditTaskView.js";
import ViewTaskView from "../dom/ViewTaskView.js";
import { createTaskItem } from "../dom/TaskItemView.js";

export default class TaskController {
    constructor(taskService, projectService) {
        this.taskService = taskService;
        this.projectService = projectService;
    }

    getTasks() {
        return this.taskService.getTaskList();
    }

    populateProjectSelect(select, selectedName = "") {
        if (!select) return;

        select.replaceChildren();

        const empty = document.createElement("option");
        empty.value = "";
        empty.textContent = "Select Project";
        select.append(empty);

        this.projectService.getProjectList().forEach((project) => {
            const option = document.createElement("option");
            option.value = project.name;
            option.textContent = project.name;
            if (project.name === selectedName) option.selected = true;
            select.append(option);
        });
    }

    getItemHandlers(refresh) {
        return {
            onToggle: (task) => {
                task.complete
                    ? this.taskService.markIncomplete(task.id)
                    : this.taskService.markComplete(task.id);
                refresh();
            },
            onDelete: (task) => {
                this.taskService.removeTask(task.id);
                refresh();
            },
            onView: (task) => this.openViewModal(task, refresh),
            onEdit: (task) => this.openEditModal(task, refresh),
        };
    }

    openViewModal(task, refresh) {
        const modal = ViewTaskView(task, {
            onClose: () => {},
            onEdit: (t) => this.openEditModal(t, refresh),
        });
        document.body.append(modal);
    }

    openEditModal(task, refresh) {
        const modal = EditTaskView(task, {
            projects: this.projectService.getProjectList(),
            onSave: (updates) => {
                this.taskService.updateTask(task.id, updates);
                refresh();
            },
            onCancel: () => {},
        });
        document.body.append(modal);
    }

    renderInto(listEl, refresh, { filterText = "", projectName = null } = {}) {
        if (!listEl) return;
        listEl.replaceChildren();

        const query = filterText.trim().toLowerCase();
        const handlers = this.getItemHandlers(refresh);

        this.getTasks()
            .filter(task => projectName === null || task.projects === projectName)
            .filter(task => !query || task.name.toLowerCase().includes(query))
            .forEach(task => listEl.append(createTaskItem(task, handlers)));
    }

    bindInitialPage(containerEl) {
        const form = containerEl.querySelector(".task-form");
        const list = containerEl.querySelector("#task-list");
        const searchInput = containerEl.querySelector(".task-search");

        const refresh = () =>
            this.renderInto(list, refresh, { filterText: searchInput?.value || "" });
        refresh();

        searchInput?.addEventListener("input", refresh);

        if (!form) return;

        this.populateProjectSelect(form.querySelector(".task-project"));

        form.addEventListener("submit", (event) => {
            event.preventDefault();

        const name = form.querySelector(".task-name")?.value.trim() ?? "";
        const description = form.querySelector(".task-description")?.value.trim() ?? "";
        const endDate = form.querySelector(".task-date")?.value ?? "";
        const priority = form.querySelector(".task-priority")?.value ?? "";
        const projects = form.querySelector(".task-project")?.value ?? "";

        if (!name) {
            alert("Task name is required.");
            return;
        }

        if (!endDate) {
            alert("Due date is required.");
            return;
        }

        if (!priority) {
            alert("Priority is required.");
            return;
        }

        this.taskService.addTask(
            new Task(
                name,
                description,
                endDate,
                priority,
                projects
            )
        );
            form.reset();
            refresh();
        });

        const cancelBtn = form.querySelector(".cancel-task-button");
        cancelBtn?.addEventListener("click", () => form.reset());
    }

    bindMyTasksPage(containerEl) {
        const list = containerEl.querySelector("#mytasks-list");
        const searchInput = containerEl.querySelector(".task-search");

        const refresh = () =>
            this.renderInto(list, refresh, { filterText: searchInput?.value || "" });
        refresh();

        searchInput?.addEventListener("input", refresh);
    }

    bindProjectTasksPage(containerEl, project) {
        const list = containerEl.querySelector("#task-list") || containerEl.querySelector("#projecttasks-list");
        const searchInput = containerEl.querySelector(".task-search");

        const refresh = () =>
            this.renderInto(list, refresh, {
                filterText: searchInput?.value || "",
                projectName: project?.name,
            });
        refresh();

        searchInput?.addEventListener("input", refresh);
    }
}
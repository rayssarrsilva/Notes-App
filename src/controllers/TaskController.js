// TaskController.js
// Ponte entre TaskService (dados/regras) e as Views (HTML puro).
// Sugestão de caminho: controllers/TaskController.js
import Task from "../models/task.js";
import EditTaskView from "../dom/edittask/EditTaskView.js";
import ViewTaskView from "../dom/edittask/ViewTaskView.js";
import { createTaskItem } from "../dom/shared/TaskItemView.js";

export default class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    getTasks() {
        return this.taskService.getTaskList();
    }

    getTasksByProject(projectName) {
        return this.getTasks().filter(task => task.projects === projectName);
    }

    getItemHandlers(onChange) {
        return {
            onToggle: (task) => {
                task.complete
                    ? this.taskService.markIncomplete(task.id)
                    : this.taskService.markComplete(task.id);
                onChange && onChange();
            },
            onDelete: (task) => {
                this.taskService.removeTask(task.id);
                onChange && onChange();
            },
            onView: (task) => this.openViewModal(task, onChange),
            onEdit: (task) => this.openEditModal(task, onChange),
        };
    }

    openViewModal(task, onChange) {
        const modal = ViewTaskView(task, {
            onClose: () => {},
            onEdit: (t) => this.openEditModal(t, onChange),
        });
        document.body.append(modal);
    }

    openEditModal(task, onChange) {
        const modal = EditTaskView(task, {
            onSave: (updates) => {
                this.taskService.updateTask(task.id, updates);
                onChange && onChange();
            },
            onCancel: () => {},
        });
        document.body.append(modal);
    }

    renderInto(listEl, onChange, { filterText = "", projectName = null } = {}) {
        if (!listEl) return;
        listEl.replaceChildren();

        const query = filterText.trim().toLowerCase();
        const handlers = this.getItemHandlers(onChange);

        this.getTasks()
            .filter(task => projectName === null || task.projects === projectName)
            .filter(task => !query || task.name.toLowerCase().includes(query))
            .forEach(task => listEl.append(createTaskItem(task, handlers)));
    }

    bindInitialPage(containerEl, onChange) {
        const form = containerEl.querySelector(".task-form");
        const list = containerEl.querySelector("#task-list");
        const searchInput = containerEl.querySelector(".task-search");

        this.renderInto(list, onChange);

        searchInput?.addEventListener("input", (e) => {
            this.renderInto(list, onChange, { filterText: e.target.value });
        });

        if (!form) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = form.querySelector(".task-name")?.value.trim();
            if (!name) return;

            const description = form.querySelector(".task-description")?.value ?? "";
            const endDate = form.querySelector(".task-date")?.value ?? "";
            const priority = form.querySelector(".task-priority")?.value ?? "medium";
            const projects = form.querySelector(".task-project")?.value ?? "";

            this.taskService.addTask(new Task(name, description, endDate, priority, projects));
            form.reset();
            onChange && onChange();
        });

        const cancelBtn = form.querySelector(".cancel-task-button");
        cancelBtn?.addEventListener("click", () => form.reset());
    }

    bindMyTasksPage(containerEl, onChange) {
        const list = containerEl.querySelector("#mytasks-list");
        const searchInput = containerEl.querySelector(".task-search");

        this.renderInto(list, onChange);

        searchInput?.addEventListener("input", (e) => {
            this.renderInto(list, onChange, { filterText: e.target.value });
        });
    }

    bindProjectTasksPage(containerEl, project, onChange) {
        const list = containerEl.querySelector("#task-list") || containerEl.querySelector("#projecttasks-list");
        const searchInput = containerEl.querySelector(".task-search");

        this.renderInto(list, onChange, { projectName: project?.name });

        searchInput?.addEventListener("input", (e) => {
            this.renderInto(list, onChange, { filterText: e.target.value, projectName: project?.name });
        });
    }
}
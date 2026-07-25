// controllers/TaskController.js
import Task from "../models/task.js";

export default class TaskController {
    constructor(taskService, viewElement) {
        this.taskService = taskService;
        this.view = viewElement;

        // Mapeamento dos elementos
        this.form = this.view.querySelector(".task-form");
        this.taskNameInput = this.view.querySelector(".task-name");
        this.descriptionInput = this.view.querySelector(".task-description");
        this.endDateInput = this.view.querySelector(".task-date");
        this.prioritySelect = this.view.querySelector(".task-priority");
        this.projectsSelect = this.view.querySelector(".task-project");
        this.cancelButton = this.view.querySelector(".cancel-task-button");
        this.taskListContainer = this.view.querySelector("#task-list");
        this.searchInput = this.view.querySelector(".task-search");

        this.init();
    }

    init() {
        this.bindEvents();
        this.renderTasks(this.taskService.getTaskList());
    }

    bindEvents() {
        if (this.form) {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.handleAddTask();
            });
        }

        if (this.cancelButton) {
            this.cancelButton.addEventListener("click", () => this.form.reset());
        }

        if (this.searchInput) {
            this.searchInput.addEventListener("input", (e) => {
                const query = e.target.value.toLowerCase();
                const filtered = this.taskService.getTaskList().filter(task => 
                    task.name.toLowerCase().includes(query) || 
                    task.description.toLowerCase().includes(query)
                );
                this.renderTasks(filtered);
            });
        }
    }

    handleAddTask() {
        const name = this.taskNameInput.value.trim();
        const description = this.descriptionInput.value.trim();
        const endDate = this.endDateInput.value;
        const priority = this.prioritySelect.value;
        const project = this.projectsSelect.value;

        if (!name) return;

        const newTask = new Task(name, description, endDate, priority, project);
        this.taskService.addTask(newTask);

        this.form.reset();
        this.renderTasks(this.taskService.getTaskList());
    }

    renderTasks(tasks) {
        if (!this.taskListContainer) return;
        this.taskListContainer.innerHTML = "";

        tasks.forEach(task => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-item");
            if (task.complete) taskCard.classList.add("completed");

            taskCard.innerHTML = `
                <input type="checkbox" class="toggle-complete" ${task.complete ? "checked" : ""} />
                <span class="task-title-text">${task.name}</span>
                <div class="task-actions">
                    <button class="view-btn">&#128065;</button>
                    <button class="edit-btn">&#9998;</button>
                    <button class="delete-btn">&times;</button>
                </div>
            `;

            const checkbox = taskCard.querySelector(".toggle-complete");
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    this.taskService.markComplete(task.id);
                } else {
                    this.taskService.markIncomplete(task.id);
                }
                this.renderTasks(this.taskService.getTaskList());
            });

            const deleteBtn = taskCard.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", () => {
                this.taskService.removeTask(task.id);
                this.renderTasks(this.taskService.getTaskList());
            });

            this.taskListContainer.appendChild(taskCard);
        });
    }
}
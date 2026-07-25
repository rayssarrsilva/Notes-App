// controllers/ReportingController.js
export default class ReportingController {
    constructor(taskService, viewElement) {
        this.taskService = taskService;
        this.view = viewElement;

        this.completedCountEl = this.view.querySelector("#completed-tasks-count");
        this.pendingCountEl = this.view.querySelector("#pending-tasks-count");

        this.init();
    }

    init() {
        this.updateMetrics();
    }

    updateMetrics() {
        const tasks = this.taskService.getTaskList();
        const completed = tasks.filter(t => t.complete).length;
        const pending = tasks.length - completed;

        if (this.completedCountEl) this.completedCountEl.textContent = completed;
        if (this.pendingCountEl) this.pendingCountEl.textContent = pending;
    }
}
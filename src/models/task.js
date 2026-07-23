// Create, edit, delete, mark complete and see details of task - class task

export default class Task {
    constructor(name, description, endDate, priority, projects = "") {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.endDate = endDate;
        this.projects = projects;
        this.priority = priority;
    }
};
// Create, edit, delete, mark complete and see details of task - class task

export default class Task {
    constructor(create, edit, deleteTask, complete, details) {
        this.create = create;
        this.delete = deleteTask;
        this.complete = false;
        this.details = details;
    };
};
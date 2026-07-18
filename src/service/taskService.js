// operations that is about all tasks
import Task from "../models/task.js";

export default class TaskService {
    constructor() {
        this.tasks = [];
    }

    setTask(task){
        this.tasks.push(task);
    }

    getTaskList(){
        return this.tasks;
    }

    setRemove(id){
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1){
            this.tasks.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getTask(id){
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id, task){
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1){
            Object.assign(this.tasks[index], task);
            return this.tasks[index];
        } else {
            return null;
        }
    }
}
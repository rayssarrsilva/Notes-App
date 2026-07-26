// operations that is about all tasks
import Task from "../models/task.js";
import { saveToStorage, loadFromStorage } from "./StorageService.js";

export default class TaskService {
    constructor() {
        this.tasks = loadFromStorage("tasks");
    }

    save() {
        saveToStorage("tasks", this.tasks);
    }

    addTask(task){
        this.tasks.push(task);
        this.save();
    }

    getTaskList(){
        return this.tasks;
    }

    removeTask(id){
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1){
            this.tasks.splice(index, 1);
            this.save();
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
            this.save();
            return this.tasks[index];
        } else {
            return null;
        }
    }

    markComplete(id) {
        const task = this.tasks.find(task => task.id === id);
        task && (task.complete = true);
        this.save();
    }

    markIncomplete(id) {
        const task = this.tasks.find(task => task.id === id);

        if(task){
            task.complete = false;
        }
        this.save();
    }
}
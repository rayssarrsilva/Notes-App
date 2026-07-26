// functions to manipuate projects (Add and Delete)
import Project from "../models/project.js";
import { saveToStorage, loadFromStorage } from "./StorageService.js";

export default class ProjectService {
    constructor() {
        this.projects = loadFromStorage("projects");
    }

    save() {
        saveToStorage("projects", this.projects);
    }

    addProject(project) {
        this.projects.push(project);
        this.save();
    }

    getProjectList() {
        return this.projects;
    }

    removeProject(id) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects.splice(index, 1);
            this.save();
            return true;
        } else {
            return false;
        }
    }

    getProject(id) {
        return this.projects.find(project => project.id === id);
    }

    updateProject(id, project) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            Object.assign(this.projects[index], project);
            this.save();
            return this.projects[index];
        } else {
            return null;
        }
    }
}
// functions to manipuate projects (Add and Delete)
import Project from "../models/project.js";

export default class ProjectService {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjectList() {
        return this.projects;
    }

    removeProject(id) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects.splice(index, 1);
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
            return this.projects[index];
        } else {
            return null;
        }
    }
}
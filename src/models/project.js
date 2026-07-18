// Class Project (Create, Edit, Delete Projects).
//Methods to add/remove tasks inside the project.

export default class Project {
    constructor(name, description, id){
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
    }
};
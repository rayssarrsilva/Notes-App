import InitialPage from "../pages/InitialPage.js";
import TaskService from "../services/TaskService.js";

export default function InitialController(navigation) {

    const app = document.querySelector("#app");

    const page = InitialPage(navigation);

    app.innerHTML = "";
    app.append(page);


    const form = document.querySelector(".task-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const task = {
            title: document.querySelector(".task-name").value,
            description: document.querySelector(".task-description").value,
            date: document.querySelector(".task-date").value,
            priority: document.querySelector(".task-priority").value,
            project: document.querySelector(".task-project").value
        };


        TaskService.addTask(task);

        form.reset();

        console.log("Task criada:", task);
    });


    const cancelButton = document.querySelector(".task-form button[type='button']");


    cancelButton.addEventListener("click", () => {
        form.reset();
    });

}
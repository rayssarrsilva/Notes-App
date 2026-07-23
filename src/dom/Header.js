import addProjecticon from "../assets/icons/addProject.svg"
import myProjectsicon from "../assets/icons/myprojects.svg"
import addTaskicon from "../assets/icons/addTask.svg"
import myTaskicon from "../assets/icons/myTask.svg"
import reportingicon from "../assets/icons/reporting.svg"

export default function Header(){
    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const buttons = [
        { title: "Add project", icon: addProjecticon},
        { title: "My projects", icon: myProjectsicon},
        { title: "Add Task", icon: addTaskicon},
        { title: "My Tasks", icon: myTaskicon},
        { title: "Reporting", icon: reportingicon}
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        const img = document.createElement("img");
        const span = document.createElement("span");

        btn.classList.add("header-button");
        nav.classList.add("nav-header");
        header.classList.add("header");
        
        span.textContent = button.title;

        img.src = button.icon;

        img.classList.add("headerIcon");

        btn.append(img, span);
        nav.append(btn);
    });

    header.appendChild(nav);

    return header;
}
import addProjecticon from "../assets/icons/addProject.svg"
import myProjectsicon from "../assets/icons/myprojects.svg"
import addTaskicon from "../assets/icons/addTask.svg"
import myTaskicon from "../assets/icons/myTask.svg"
import reportingicon from "../assets/icons/reporting.svg"

export default function Header(navigationApp){
    const header = document.createElement("header");

    const nav = document.createElement("nav");

    nav.classList.add("nav-header");
    header.classList.add("header");

    const buttons = [
        { title: "Add project", icon: addProjecticon, id: "addP"},
        { title: "My projects", icon: myProjectsicon, id: "myP"},
        { title: "Add Task", icon: addTaskicon, id: "addT"},
        { title: "My Tasks", icon: myTaskicon, id: "myT"},
        { title: "Reporting", icon: reportingicon, id: "reporting"}
    ];


    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.classList.add("header-button");
        btn.id = button.id;

        const img = document.createElement("img");
        img.src = button.icon;
        img.alt = button.title;
        img.classList.add("header-icon");

        const span = document.createElement("span");
        span.textContent = button.title;
        span.classList.add("span-header");
        
        btn.append(img, span);
        nav.append(btn);

        btn.addEventListener("click", () => {
            if (button.id === "addT"){
                navigationApp.InitialPage();
            }
        });
    });

    header.append(nav);

    return header;
}
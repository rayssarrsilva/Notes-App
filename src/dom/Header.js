export default function Header(){
    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const buttons = [
        { title: "Add project", icon: "../assets/icons/addProject.svg"},
        { title: "My projects", icon: "../assets/icons/myprojects.svg"},
        { title: "Add Task", icon: "../assets/icons/addTask.svg"},
        { title: "My Tasks", icon: "../assets/icons/myTask.svg"},
        { title: "Reporting", icon: "../assets/icons/reporting.svg"}
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        const img = document.createElement("img");

        img.src = button.icon;
        img.alt = button.title;

        img.classList.add("headerIcon");

        btn.append(img, button.title);
        nav.append(btn);
    });

    header.appendChild(nav);

    return header;
}
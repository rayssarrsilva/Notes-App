// MyProjectsView.js
// Só monta o "casco": o preenchimento da lista é feito pelo ProjectController.

export default function MyProjectsView() {
    const content = document.createElement("section");
    content.classList.add("myprojects-content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container", "title-container-center");

    const title = document.createElement("h1");
    title.textContent = "Notes App";
    title.classList.add("title-app");

    const titleArrow = document.createElement("span");
    titleArrow.classList.add("title-arrow");
    titleArrow.innerHTML = "&#10141;";

    titleContainer.append(title, titleArrow);

    const card = document.createElement("section");
    card.classList.add("myprojects-card");

    const header = document.createElement("div");
    header.classList.add("myprojects-header");
    header.innerHTML = "<span class='myprojects-icon'></span> My projects";

    const listBox = document.createElement("div");
    listBox.classList.add("myprojects-list");
    listBox.id = "myprojects-list";

    card.append(header, listBox);
    content.append(titleContainer, card);

    return content;
}
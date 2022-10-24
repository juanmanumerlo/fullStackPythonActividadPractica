import hamburgerMenu from "./menu_hamburgesa.js";

//Activar Menu Hamburguesa
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
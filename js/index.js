import hamburgerMenu from "./menu_hamburgesa.js";
import slider from "./carrousel.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    slider();
});
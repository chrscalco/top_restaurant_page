console.log("it works");

import "./styles.css";
import {headerModule} from "./header-module";
import {homeModule} from "./module-home";
import {menuModule} from "./module-menu";
import {contactModule} from "./module-contact";

const moduleContent = document.querySelector("#content");
const loadHomeButton = document.getElementById("home-button");
const loadMenuButton = document.getElementById("menu-button");
const loadContactButton = document.getElementById("contact-button");

headerModule();
homeModule();

let currentModule = homeModule;

function NavHandler (module) {
    moduleContent.innerHTML = "";
    module();
    currentModule = module;
}

loadHomeButton.addEventListener("click", () => {NavHandler(homeModule)});
loadMenuButton.addEventListener("click", () => {NavHandler(menuModule)});
loadContactButton.addEventListener("click", () => {NavHandler(contactModule)});

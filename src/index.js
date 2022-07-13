import './styles/style.css';
import logoImg from './images/KFC_logo.svg_.png';

import {loadMenu} from './menu';
import {loadHome} from './home';
import {loadContact} from './contact'

(function(){
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const logo = new Image();
    logo.src = logoImg;
    header.appendChild(logo);

    const navButtons = document.createElement("div");
    navButtons.classList.add("navButtons");
    const home = document.createElement("button");
    home.textContent = "Home";

    const menu = document.createElement("button");
    menu.textContent = "Menu";

    const contact = document.createElement("button");
    contact.textContent = "Contact";

    (function (){
        home.addEventListener('click', loadHome);
        menu.addEventListener('click', loadMenu);
        contact.addEventListener('click', loadContact);
    })()

    navButtons.appendChild(home);
    navButtons.appendChild(menu);
    navButtons.appendChild(contact);
    header.appendChild(navButtons);

    body.appendChild(header);
    loadHome();
})();


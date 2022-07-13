import {newContent} from './new-content'


function loadContact(){
    const body = document.querySelector("body");
    const content = newContent();

    const h1 = document.createElement("h1");
    h1.textContent = "Contact";
    content.appendChild(h1);

    const contact = document.createElement("div");

    const phNo = document.createElement("p");
    phNo.textContent = "8667833971"
    contact.appendChild(phNo);

    const address = document.createElement("p");
    address.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis, eveniet illum praesentium distinctio saepe quae atque dolores aspernatur impedit quas ipsum! Dolor voluptatibus explicabo rem temporibus autem nihil voluptas."
    contact.appendChild(address);

    content.appendChild(contact);

    body.appendChild(content);
    
}

export {loadContact};
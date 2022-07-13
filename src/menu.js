import {newContent} from './new-content'


function loadMenu(){
    const body = document.querySelector("body");
    const content = newContent();

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    content.appendChild(h1);

    const menuList = document.createElement("ul");
    for(let i=1; i<10; i++){
        const menuItem = document.createElement("li");
        menuItem.textContent = `Item ${i}`;
        menuList.appendChild(menuItem);
    }
    content.appendChild(menuList);

    body.appendChild(content);
    
}

export {loadMenu};
import heroImage from './images/image.webp';

import {newContent} from './new-content';

function loadHome(){
    const body = document.querySelector("body")
    const content = newContent();
    body.appendChild(content);

    const hero = document.createElement("div");
    hero.classList.add('hero');
    content.appendChild(hero);

    const heroHeading = document.createElement("h1");
    heroHeading.textContent = "KFC";
    hero.appendChild(heroHeading);

    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "It's Finger Lickin' Good";
    hero.appendChild(heroParagraph);

    const heroImg = new Image();
    heroImg.src = heroImage;
    heroImg.classList.add('hero');
    heroImg.classList.add('hero-image');
    content.appendChild(heroImg);

}

export {loadHome};
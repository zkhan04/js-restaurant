import img from './assets/nyquil-chicken.jpg';

function loadHomePage () {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    header.appendChild(nav)
    const image = new Image();
    image.src = img;
    const description = document.createElement('p');
    description.innerHTML = "Nyquil chicken"
    const content = document.createElement('div');
    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(description);
    return content;
}

export {loadHomePage}
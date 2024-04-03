import img from './assets/nyquil-chicken.jpg';

// loads home page
function loadHomePage () {
    const content = document.createElement('div');
    const header = document.createElement('h1');
    const image = new Image();
    const description = document.createElement('p');

    image.src = img;
    header.innerHTML = "COD Cafeteria";

    content.appendChild(header);
    content.appendChild(image);
    return content;
}

export {loadHomePage}
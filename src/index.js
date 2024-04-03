import {loadHomePage} from './homepage';
import {loadMenu} from './menu';
import {loadContact} from './contact';
import './style.css';

// buttons and content div
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu')
const contactButton = document.querySelector('#contact')
const contentBox = document.querySelector('#content');

// event listeners for button; load different tabs
homeButton.onclick = () => loadPage(loadHomePage());
menuButton.onclick = () => loadPage(loadMenu());
contactButton.onclick = () => loadPage(loadContact())

// initial loading
contentBox.appendChild(loadHomePage());

document.querySelector('#content');

const loadPage = (content) => {
    contentBox.innerHTML = "";
    contentBox.appendChild(content);
}
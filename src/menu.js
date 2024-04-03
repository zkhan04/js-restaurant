const json = require('./assets/menu.json');

// loads menu from a json file containing all the menu items
const loadMenu = () => {
    const content = document.createElement('div');
    const menuList = document.createElement('ul');
    json.menu.forEach((food) => menuList.appendChild(createMenuItem(food)));
    content.appendChild(menuList);
    return content;
}

// returns an li with the food name
const createMenuItem = (name) => {
    const item = document.createElement('li');
    item.innerHTML = name;
    return item;
}

export {loadMenu};
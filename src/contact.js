// returns the contact page
const loadContact = () => {
    const contactList = document.createElement('ul');
    const email = document.createElement('li');
    const phoneNumber = document.createElement('li');

    email.innerHTML = "brabuswatinkel@gmail.com";
    phoneNumber.innerHTML = "4876152200";
    contactList.appendChild(email);
    contactList.appendChild(phoneNumber);

    return contactList;
}

export {loadContact};
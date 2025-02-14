export function contactModule() {
    const contentDiv = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    const contactSubDiv = document.createElement('div');

    contentDiv.appendChild(contactDiv);
    contactDiv.classList.add("contact-div");
    contactSubDiv.classList.add("contact-sub-div");

    const conHeader = document.createElement("h2");
    conHeader.innerText = "CONTACT US";
    contactDiv.appendChild(conHeader);
    contactDiv.appendChild(contactSubDiv);

    const contactUs = document.createElement("div");
    const address = document.createElement("div");

    contactUs.classList.add("contact-card");
    address.classList.add("contact-card");

    const contactUsHead = document.createElement("h2");
    const phoneNum = document.createElement("h3");
    const email = document.createElement("h3");

    contactUsHead.innerText = "Call Us";
    phoneNum.innerText = "Phone: 210-5555555";
    email.innerText = "Email: souvlaki@souvlaki.souvlaki";

    contactUs.appendChild(contactUsHead);
    contactUs.appendChild(phoneNum);
    contactUs.appendChild(email);
    contactSubDiv.appendChild(contactUs);

    const addressHead = document.createElement("h2");
    const addressAdd = document.createElement("h3");

    addressHead.innerText = "Address";
    addressAdd.innerText = "Everywhere in Greece";

    address.appendChild(addressHead);
    address.appendChild(addressAdd);
    contactSubDiv.appendChild(address);
}
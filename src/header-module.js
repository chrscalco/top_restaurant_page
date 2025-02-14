export function headerModule () {
    const header = document.querySelector("header");
    const logoImg = document.createElement("img");
    const logo = document.createElement("h1");
    const logoDiv = document.createElement("div");

    header.insertBefore(logoDiv, header.firstChild);
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logo);

    logoDiv.classList.add("logoDiv");
    logoImg.classList.add("logo");
    logo.innerText = "SOUVLAKI BAR";
}
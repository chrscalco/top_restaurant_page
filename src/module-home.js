export function homeModule() {
    const contentDiv = document.querySelector('#content');
    const homeDiv = document.createElement('div');

    contentDiv.appendChild(homeDiv);
    homeDiv.classList.add("home-div");

    const homeHeader = document.createElement("h2");
    const heroDiv = document.createElement("div");
    const paragraph = document.createElement("p");
    const gyroImg = document.createElement("img");

    homeHeader.innerText = "TRADITIONAL GREEK SOUVLAKI";
    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(heroDiv);

    heroDiv.classList.add("hero-div");

    heroDiv.appendChild(paragraph);
    heroDiv.appendChild(gyroImg);

    paragraph.innerText = "Craving a taste of Greece? Look no further than Souvlaki Bar! We serve up authentic, mouthwatering souvlaki, made with the freshest ingredients and traditional family recipes. Tender, marinated meats grilled to perfection and wrapped in warm pita bread with your favorite toppings. Whether you're in the mood for a classic gyro souvlaki or something more adventurous, we've got you covered. Come experience the flavors of Greece at Souvlaki Bar!"
    gyroImg.classList.add("gyro-img")

}
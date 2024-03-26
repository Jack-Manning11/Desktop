const cities = document.querySelectorAll('.city');
const sidebar = document.querySelector('.sidebar');
const map = document.querySelector('.map');

const cityData = {
    "serenityGlade": {
        "name": "Serenity's Glade",
        "image": "Images/maps/SerenityGlade.jpg",
        "description": "Serenity's Glade, a creation of the goddess Sylvana, the Forest Muse, is a magical forest teeming with an extraordinary array of flora and fauna. This enchanted realm boasts towering trees adorned with shimmering leaves, sunlight filtering through the canopy to cast enchanting patterns on the forest floor. In this realm, a symphony of nature's sounds fills the air, from the melodious songs of birds to the gentle babbling of hidden streams. Sylvana's touch imbues every aspect of the glade with a sense of peace and tranquility, making it a sanctuary where visitors can immerse themselves in the beauty and wonder of the natural world."
    },
    "sundrenchedCitadel": {
        "name": "Sundrenched Citadel",
        "image": "Images/sundrenched-citadel.jpg",
        "description": "Description of Sundrenched Citadel."
    },
};

function populateSidebar(cityId) {
    const cityInfo = cityData[cityId];
    sidebar.innerHTML = `
        <div class="heroHolder">
        <a href="mainCities/${cityId}.html">
        <img src="${cityInfo.image}" alt="${cityInfo.name}" class="hero">
        </a>
        </div>
        <h2 class="title">${cityInfo.name}</h2>
        <p class="description">${cityInfo.description}</p>
    `;
    sidebar.style.display = "flex";
}

cities.forEach(city => {
    city.addEventListener('click', function() {
        const cityId = this.id;
        populateSidebar(cityId);
    });
});

map.addEventListener('click', () => {
    sidebar.style.display = "none";
});
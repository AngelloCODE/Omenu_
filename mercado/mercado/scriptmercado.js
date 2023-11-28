document.addEventListener("DOMContentLoaded", init);

function init() {
    const nearbyMarkets = [
        { name: "Giassi", distance: "1 km", image: "giassi.jpg" },
        { name: "Fort Atacadista", distance: "2 km", image: "Capa-FORT-atacadista.jpg" },
        { name: "Supermercado Condor", distance: "0.5 km", image: "card.jpg" },
        { name: "Carrefour Hipermercado", distance: "3 km", image: "carrefour-3.jpg" }
        // Adicione mais mercados fictícios conforme necessário
    ];

    // Adicione informações sobre os mercados à lista
    const marketList = document.getElementById("marketList");

    nearbyMarkets.forEach(market => {
        const marketCard = document.createElement("div");
        marketCard.classList.add("market-card");

        const marketImage = document.createElement("img");
        marketImage.classList.add("market-image");
        marketImage.src = market.image;
        marketImage.alt = market.name;

        const marketName = document.createElement("div");
        marketName.classList.add("market-name");
        marketName.textContent = market.name;

        const marketDistance = document.createElement("div");
        marketDistance.classList.add("market-distance");
        marketDistance.textContent = `Distância: ${market.distance}`;

        marketCard.appendChild(marketImage);
        marketCard.appendChild(marketName);
        marketCard.appendChild(marketDistance);
        marketList.appendChild(marketCard);
    });
}
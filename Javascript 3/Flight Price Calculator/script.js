function calculatePrice() {
    const age = parseInt(document.getElementById("age").value);
    const flightClass = document.getElementById("flightClass").value;
    const distance = parseInt(document.getElementById("distance").value);
    const isPeakSeason = document.getElementById("isPeakSeason").checked;
    const isMember = document.getElementById("isMember").checked;

    const basePrices = {
        economy: 0.05,
        business: 0.1,
        first: 0.2
    };

    if (flightClass in basePrices) {
        let price = distance * basePrices[flightClass];

        if (isPeakSeason) {
            price *= 1.2;
        }

        if (age < 12 || age >= 65) {
            price *= 0.9;
        }

        if (isMember) {
            const discounts = {
                economy: 0.85,
                business: 0.8,
                first: 0.75
            };
            price *= discounts[flightClass];
        }

        document.getElementById("priceDisplay").innerText = `Ticket price: $${price.toFixed(2)}`;
    } else {
        document.getElementById("priceDisplay").innerText = "Invalid flight class.";
    }
}
 
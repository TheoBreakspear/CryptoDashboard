const priceDisplay = document.getElementById("price");

let currency = 'USD';
const url = `https://api.coinbase.com/v2/prices/spot?currency=${currency}`

async function updatePrice() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }
        let jsonResponse = await response.json();

        let price = jsonResponse.data.amount;
        priceDisplay.innerText = `${price} ${currency}`;

    } catch (err) {
        console.log(err);
    }
}

updatePrice();
let updateInterval = setInterval(updatePrice, 20000);
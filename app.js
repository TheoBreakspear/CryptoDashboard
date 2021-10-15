const priceDisplay = document.getElementById("price");

const url = 'https://api.coinbase.com/v2/prices/spot?currency=USD'

async function updatePrice() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }
        let jsonResponse = await response.json();

        let price = jsonResponse.data.amount;
        priceDisplay.innerText = price;

    } catch (err) {
        console.log(err);
    }
}

let updateInterval = setInterval(updatePrice, 1000);
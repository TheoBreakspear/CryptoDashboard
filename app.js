const priceDisplay = document.getElementById("price");

fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
.then(
    response => {
        if (response.ok){
            return response.json()
        }
        throw new Error(`${response.status} ${response.statusText}`);
    },
    networkError => {
        console.error(networkError.message);
    }
)
.then(
    jsonResponse => {
        priceDisplay.innerText = jsonResponse.data.amount;
    }
)
.catch(err => console.error(err))


let form = document.querySelector(".form");
let amount = document.querySelector(".js-amountInput");
let displayPlnAmount = document.querySelector(".js-plnAmount");
let currency = document.querySelector(".js-currency");
let displayCurrencyAmount = document.querySelector(".js-currencyAmount");
let exchangeRate;
let EUR = 0.21;
let USD = 0.23;
let output;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "EUR":
            exchangeRate = EUR;
            break;
        case "USD":
            exchangeRate = USD;
            break;
    }

    output = amount.value * exchangeRate;
    displayPlnAmount.innerText = `${amount.value} PLN = ${output.toFixed("2")} ${currency.value}`
})
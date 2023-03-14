let form = document.querySelector(".form")
let jsColor = document.querySelector(".form__inputColor");
let jsSize = document.querySelector(".form__inputSize");
let basePrice = 27
let priceValue = document.querySelector(".form__price--value");

form.addEventListener("input", () => { 
    jsColor.value === "Biały" ? price = basePrice : price = basePrice + 5;

    jsSize.value >= 50 && jsSize.value <= 59.5 ? price = price + 4 : price;
    jsSize.value >= 60 && jsSize.value <= 69.5 ? price = price + 8 : price;
    jsSize.value >= 70 && jsSize.value <= 79.5 ? price = price + 12 : price;
    jsSize.value >= 80 && jsSize.value <= 89.5 ? price = price + 16 : price;
    jsSize.value >= 90 && jsSize.value <= 99.5 ? price = price + 20 : price;
    jsSize.value >= 100 && jsSize.value <= 109.5 ? price = price + 24 : price;
    jsSize.value >= 110 && jsSize.value <= 119.5 ? price = price + 28 : price;
    jsSize.value >= 120 && jsSize.value <= 130 ? price = price + 32 : price;

    console.log(price);
    priceValue.innerText = price;
})

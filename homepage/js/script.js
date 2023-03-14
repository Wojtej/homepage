console.log("Hello world!");

let darkTheme = document.querySelector(".darkTheme");
let body = document.querySelector(".body");
let changeBackground = document.querySelector(".changeBackground");

changeBackground.addEventListener("click", () => {
     body.classList.toggle("darkTheme");
     changeBackground.classList.toggle("changeBackgroundDark");

     changeBackground.innerText = body.classList.contains("darkTheme") ? "Tryb jasny" : "Tryb ciemny"
})
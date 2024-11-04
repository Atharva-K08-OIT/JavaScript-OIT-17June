let RedLight = document.querySelector(".red");
let YellowLight = document.querySelector(".yellow");
let GreenLight = document.querySelector(".green");

function onRed() {
  RedLight.classList.remove("offRed");
  YellowLight.classList.add("offYellow");
  GreenLight.classList.add("offGreen");
}

function onYellow() {
  RedLight.classList.add("offRed");
  YellowLight.classList.remove("offYellow");
  GreenLight.classList.add("offGreen");
}

function onGreen() {
  RedLight.classList.add("offRed");
  YellowLight.classList.add("offYellow");
  GreenLight.classList.remove("offGreen");
}

(function () {
  onRed();
  setInterval(function () {
    onRed();
    setTimeout(onYellow, 3000);
    setTimeout(onGreen, 5000);
  }, 8000);
})();

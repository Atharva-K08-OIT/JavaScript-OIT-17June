let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let s4 = document.querySelector("#s4");
let s5 = document.querySelector("#s5");
let emoji = document.querySelector(".emoji");
let clear = document.querySelector("#clr");
let submit = document.querySelector("#sub");
let container = document.querySelector(".container");

clear.addEventListener("click", function () {
  s1.style.color = "white";
  s2.style.color = "white";
  s3.style.color = "white";
  s4.style.color = "white";
  s5.style.color = "white";
  emoji.innerText = "🥺";
});
var h4 = document.createElement("h4");
h4.textContent = "Thanks For Feedback";
h4.style.textAlign = "center";
h4.style.color = "white";
submit.addEventListener("click", function () {
  container.replaceChild(h4, emoji);
});

s1.addEventListener("click", function () {
  s1.style.color = "yellow";
  s2.style.color = "white";
  s3.style.color = "white";
  s4.style.color = "white";
  s5.style.color = "white";
  emoji.innerText = "😢";
});
s2.addEventListener("click", function () {
  s1.style.color = "yellow";
  s2.style.color = "yellow";
  s3.style.color = "white";
  s4.style.color = "white";
  s5.style.color = "white";
  emoji.innerText = "☹️";
});
s3.addEventListener("click", function () {
  s1.style.color = "yellow";
  s2.style.color = "yellow";
  s3.style.color = "yellow";
  s4.style.color = "white";
  s5.style.color = "white";
  emoji.innerText = "😊";
});
s4.addEventListener("click", function () {
  s1.style.color = "yellow";
  s2.style.color = "yellow";
  s3.style.color = "yellow";
  s4.style.color = "yellow";
  s5.style.color = "white";
  emoji.innerText = "🥳";
});
s5.addEventListener("click", function () {
  s1.style.color = "yellow";
  s2.style.color = "yellow";
  s3.style.color = "yellow";
  s4.style.color = "yellow";
  s5.style.color = "yellow";
  emoji.innerText = "🤩";
});

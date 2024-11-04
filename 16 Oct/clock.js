var hours = document.querySelector(".hours");
var min = document.querySelector(".mins");
var sec = document.querySelector(".sec");

let s = Number(sec.innerText);
let m = Number(min.innerText);
let h = Number(hours.innerText);
function IncreaseSec() {
  s++;
  if (s <= 9) {
    sec.innerText = "0" + s;
  } else if (s == 60) {
    IncreaseMin();
    sec.innerHTML = "00";
    s = 0;
  } else {
    sec.innerText = s;
  }
}

function IncreaseMin() {
  m++;
  if (m <= 9) {
    min.innerHTML = "0" + m;
  } else if (m == 60) {
    IncreaseHour();
    min.innerText = "00";
    m = 0;
  } else {
    min.innerHTML = m;
  }
}

function IncreaseHour() {
  h++;
  if (h <= 9) {
    hours.innerHTML = "0" + h;
  } else if (h == 24) {
    hours.innerText = "00";
    h = 0;
  } else {
    hours.innerHTML = h;
  }
}

setInterval(IncreaseSec,1000)
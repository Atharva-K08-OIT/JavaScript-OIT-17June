let cel = document.querySelector("#cel");
let fah = document.querySelector("#fah");

cel.addEventListener("input", () => {
  let CelValue = cel.value;
  let fahValue = (9 / 5) * CelValue + 32;
  fah.value = `${fahValue.toFixed(4)}`;
});

fah.addEventListener("input", () => {
  let fahValue = fah.value;
  let celValue = (fahValue - 32) * (5 / 9);
  cel.value = `${celValue.toFixed(4)}`;
});

let box = document.querySelector(".container");

// box.style.backgroundColor = "yellow";
// box.style.padding = "30px";
// box.style.fontSize = "20px";
// box.style.fontWeight = "700";

// box.style.cssText = `
// background-color:yellow;
// padding:30px;
// font-size:20px;
// font-weight:700;    
// `

box.classList.add("my-style");

box.classList.replace("my-style","my-new-style")

box.classList.toggle("my-style");

box.classList.remove("my-style");
let slides = document.querySelectorAll(".slide");

let slideIndex = 1;

setInterval(nextSlide,3000)

function nextSlide() {
  slideIndex++;
  if (slideIndex == slides.length) {
    slideIndex = 0;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  if (slideIndex == -1) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

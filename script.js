let currentSlide = 0; // Tracks the current active slide

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Ensure the index is within the valid range
  if (index < 0) {
    index = slides.length - 1; // Wrap to the last slide
  } else if (index >= slides.length) {
    index = 0; // Wrap to the first slide
  }

  // Remove the active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add the active class to the selected slide and dot
  slides[index].classList.add("active");
  dots[index].classList.add("active");

  // Update the slide position
  const slider = document.querySelector(".slides");
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Update the currentSlide index
  currentSlide = index;
}

// Initialize the slider with the first slide visible
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});

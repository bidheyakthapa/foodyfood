const burger = document.getElementById("burger");
const pizza = document.getElementById("pizza");
const fries = document.getElementById("fries");
const drinks = document.getElementById("drinks");

burger.addEventListener("click", toggleAriaHidden);
pizza.addEventListener("click", toggleAriaHidden);
fries.addEventListener("click", toggleAriaHidden);
drinks.addEventListener("click", toggleAriaHidden);

function toggleAriaHidden() {
  const element = this; // "this" refers to the clicked element

  // Set all elements to aria-hidden="true"
  burger.setAttribute("aria-hidden", "true");
  pizza.setAttribute("aria-hidden", "true");
  fries.setAttribute("aria-hidden", "true");
  drinks.setAttribute("aria-hidden", "true");

  // Set the clicked element to aria-hidden="false"
  element.setAttribute("aria-hidden", "false");
}
const radioButtons = document.querySelectorAll('input[type="radio"]');
const slides = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const manualBtns = document.querySelectorAll(".manual-btn"); // Select all manual navigation buttons

let currentIndex = 0; // Initialize the current slide index
const numberOfSlides = 3; // Change this to match the actual number of slides

function moveSlider() {
  // Calculate the translation based on the current index
  const translateX = -currentIndex * 100;

  // Apply the transformation to move the slider
  slides.style.transform = `translateX(${translateX}%)`;

  // Disable or enable the arrow buttons based on the current slide index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === numberOfSlides - 1;

  // Update the background color of manual navigation buttons
  manualBtns.forEach((btn, index) => {
    if (index === currentIndex) {
      btn.style.background = "#ff3838";
      btn.style.opacity = 1;
    } else {
      btn.style.background = "";
      btn.style.opacity = 0.3;
    }
  });
}

prevBtn.addEventListener("click", () => {
  // Check if we are not at the first slide
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous slide
    moveSlider();
  }
});

nextBtn.addEventListener("click", () => {
  // Check if we are not at the last slide
  if (currentIndex < numberOfSlides - 1) {
    currentIndex++; // Move to the next slide
    moveSlider();
  }
});

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    currentIndex = index; // Set the current index based on radio button selection
    moveSlider();
  });
});

// Initialize the slider
moveSlider();

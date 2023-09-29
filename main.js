// Get references to category elements and slide elements
const categories = document.querySelectorAll(".cate");
const slides = document.querySelectorAll(".slides");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const manualBtns = document.querySelectorAll(".manual-btn");

let currentIndex = 0;

// Function to toggle visibility of categories and slides
function toggleAriaHidden() {
  const category = this.getAttribute("data-category");

  currentIndex = 0;

  // Set aria-hidden="true" for all categories and slides
  categories.forEach((cat) => {
    cat.setAttribute("aria-hidden", "true");
  });

  slides.forEach((slide) => {
    slide.setAttribute("aria-hidden", "true");
  });

  // Set aria-hidden="false" for the clicked category
  this.setAttribute("aria-hidden", "false");

  // Find and set aria-hidden="false" for the associated slide section
  const associatedSlide = document.querySelector(
    `[data-category="${category}-list"]`
  );
  if (associatedSlide) {
    associatedSlide.setAttribute("aria-hidden", "false");
  }

  moveSlider();
}

// Add click event listeners to category elements
categories.forEach((category) => {
  category.addEventListener("click", toggleAriaHidden);
});

// Initialize the slider for the default category (Burger)
toggleAriaHidden.call(categories[0]);

// Slider navigation functionality

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length) {
    currentIndex++;
    moveSlider();
  }
});

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    currentIndex = index;
    moveSlider();
  });
});

function moveSlider() {
  const translateX = -currentIndex * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${translateX}%)`;
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length;

  manualBtns.forEach((manualBtn, index) => {
    if (index === currentIndex) {
      manualBtn.style.background = "#ff3838";
      manualBtn.style.opacity = 1;
    } else {
      manualBtn.style.background = "";
      manualBtn.style.opacity = 0.3;
    }
  });
}

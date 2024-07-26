// Get references to category elements and slide elements
const categories = document.querySelectorAll(".cate");
const categorySlides = document.querySelectorAll(".slides[data-category]");
const categoryRadioButtons = document.querySelectorAll(
  'input[name="category-radio-btn"]'
);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const categoryManualBtns = document.querySelectorAll(".category-manual-btn");
const testiManualBtns = document.querySelectorAll(".testi-manual-btn");
const testiRadioButtons = document.querySelectorAll(
  'input[name="testi-radio-btn"]'
);

let categoryIndex = 0;
let testiIndex = 0;

// Function to toggle visibility of categories and slides
function toggleAriaHidden() {
  const category = this.getAttribute("data-category");

  categoryIndex = 0;

  // Set aria-hidden="true" for all categories and slides
  categories.forEach((cat) => {
    cat.setAttribute("aria-hidden", "true");
  });

  categorySlides.forEach((slide) => {
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

  moveCategorySlider();
}

// Add click event listeners to category elements
categories.forEach((category) => {
  category.addEventListener("click", toggleAriaHidden);
});

// Initialize the slider for the default category (Burger)
toggleAriaHidden.call(categories[0]);

// Slider navigation functionality

prevBtn.addEventListener("click", () => {
  if (categoryIndex > 0) {
    categoryIndex--;
    moveCategorySlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (categoryIndex < categorySlides.length - 2) {
    categoryIndex++;
    moveCategorySlider();
  }
});

categoryRadioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    categoryIndex = index;
    moveCategorySlider();
  });
});

testiRadioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    testiIndex = index;
    moveTestiSlider();
  });
});

function moveCategorySlider() {
  const translateX = -categoryIndex * 100;
  categorySlides.forEach((slide) => {
    slide.style.transform = `translateX(${translateX}%)`;
  });

  prevBtn.disabled = categoryIndex === 1;
  nextBtn.disabled = categoryIndex === categorySlides.length - 1;

  categoryManualBtns.forEach((categoryManualBtn, index) => {
    if (index === categoryIndex) {
      categoryManualBtn.style.background = "#ff3838";
      categoryManualBtn.style.opacity = 1;
    } else {
      categoryManualBtn.style.background = "";
      categoryManualBtn.style.opacity = 0.3;
    }
  });

}

function moveTestiSlider() {
  const translateX = -testiIndex * 100;
  const testiSlides = document.querySelectorAll(".testi-slide");
  testiSlides.forEach((slide) => {
    slide.style.transform = `translateX(${translateX}%)`;
  });

  testiManualBtns.forEach((testiManualBtn, index) => {
    if (index === testiIndex) {
      testiManualBtn.style.background = "#ff3838";
      testiManualBtn.style.opacity = 1;
    } else {
      testiManualBtn.style.background = "";
      testiManualBtn.style.opacity = 0.3;
    }
  });

  testiRadioButtons.forEach((radio, index) => {
    if (index === testiIndex) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  });
}

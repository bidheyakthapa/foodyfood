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

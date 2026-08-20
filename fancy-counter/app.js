const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");
const title = document.querySelector(".counter__title");

let count = 0;

function updateCounter() {
  counterValue.textContent = count;

  // Disable buttons at limits
  increaseButton.disabled = count === 5;
  decreaseButton.disabled = count === -1;

  // Change title color
  if (count === 5) {
    title.style.color = "red";
  } else {
    title.style.color = ""; // returns to original CSS color
  }
}

increaseButton.addEventListener("click", () => {
  if (count < 5) {
    count++;
  }

  updateCounter();
});

decreaseButton.addEventListener("click", () => {
  if (count > -1) {
    count--;
  }

  updateCounter();
});

resetButton.addEventListener("click", () => {
  count = 0;

  updateCounter();
});
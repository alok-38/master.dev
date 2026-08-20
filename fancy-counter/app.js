const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");

let count = 0;

increaseButton.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decreaseButton.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

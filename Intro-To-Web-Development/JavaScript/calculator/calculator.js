const buttons = document.querySelectorAll(".btn");
const displayEl = document.querySelector(".display");

let currentInput = "";
let operator = null;
let firstNumber = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (value === "clear") {
      currentInput = "";
      operator = null;
      firstNumber = null;
      displayEl.textContent = "";
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Store first number and operator
      firstNumber = parseFloat(currentInput);
      operator = value;
      currentInput = ""; // prepare for second number
    } else if (value === "equals") {
      if (operator && firstNumber !== null && currentInput !== "") {
        const secondNumber = parseFloat(currentInput);
        let result;

        if (operator === "+") result = firstNumber + secondNumber;
        if (operator === "-") result = firstNumber - secondNumber;
        if (operator === "*") result = firstNumber * secondNumber;
        if (operator === "/") result = firstNumber / secondNumber;

        currentInput = result.toString();
        operator = null;
        firstNumber = null;
        displayEl.textContent = currentInput;
      }
    } else {
      currentInput += value;
      displayEl.textContent = currentInput;
    }
  });
});

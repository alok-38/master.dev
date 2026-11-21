
const screen = document.getElementById("screen");

let currentInput = "0";
let previousInput = "";
let operator = null;
let shouldResetScreen = false;

function updateScreen() {
  screen.innerText = currentInput;
}

function buttonClick(value) {
  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else {
    handleSymbol(value);
  }
  updateScreen();
}

function handleNumber(number) {
  if (shouldResetScreen) {
    currentInput = number === "." ? "0." : number;
    shouldResetScreen = false;
    return;
  }

  if (number === "." && currentInput.includes(".")) return;

  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
}

function handleSymbol(symbol) {
  if (symbol === "Ac") {
    currentInput = "0";
    previousInput = "";
    operator = null;
    shouldResetScreen = false;
    return;
  }

  if (symbol === "⌫") {
    currentInput = currentInput.length > 1
      ? currentInput.slice(0, -1)
      : "0";
    return;
  }

  if (symbol === "=") {
    if (operator === null || previousInput === "") return;

    const first = parseFloat(previousInput);
    const second = parseFloat(currentInput);

    let result;

    switch (operator) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = second === 0 ? "Error" : first / second;
        break;
    }

    currentInput = String(
      typeof result === "number"
        ? Number(result.toPrecision(12))
        : result
    );

    previousInput = "";
    operator = null;
    shouldResetScreen = true;
    return;
  }

  if (["+", "-", "*", "/"].includes(symbol)) {
    previousInput = currentInput;
    operator = symbol;
    shouldResetScreen = true;
  }
}

function init() {
  document.querySelector(".calculator").addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;

    buttonClick(event.target.innerText.trim());
  });

  updateScreen();
}

init();

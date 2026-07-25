document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.querySelector("input");
  const buttonEl = document.querySelector("button");

  buttonEl.addEventListener("click", () => {
    const inputValue = inputEl.value.trim();

    if (inputValue) {
      localStorage.setItem("username", inputValue);
      console.log("Saved", inputValue);
    } else {
      console.log("Input is empty");
    }
  });
});
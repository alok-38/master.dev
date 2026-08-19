const passwordField = document.getElementById("password");
const passwordDisplayIcon = document.querySelector(".login__password-icon");
const form = document.querySelector(".login__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!passwordField.value.trim()) {
    passwordField.style.borderColor = "red";
    passwordField.focus();
    return;
  }

  passwordField.style.borderColor = "";

  // Continue with login
});

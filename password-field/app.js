const passwordField = document.getElementById("password");
const passwordDisplayIcon = document.querySelector(".login__password-icon");
const form = document.querySelector(".login__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!passwordField.value.trim()) {
    passwordField.style.border = "2px solid red";
    passwordField.focus();
    return;
  }

  passwordField.style.borderColor = "";

  // Continue with login
});

passwordDisplayIcon.addEventListener("click", () => {
  const isHidden = password.type === "password";
  passwordField.type = isHidden ? "text" : "password";
});

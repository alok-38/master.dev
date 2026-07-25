function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function likePost(button) {
  const span = button.querySelector("span");
  let count = parseInt(span.textContent);
  count++;
  span.textContent = count;
}

const addButton = document.getElementById("add");
const ulEl = document.getElementById("list");

addButton.addEventListener("click", () => {
  const liEl = document.createElement("li");
  liEl.textContent = "New Item";
  ulEl.appendChild(liEl);
});

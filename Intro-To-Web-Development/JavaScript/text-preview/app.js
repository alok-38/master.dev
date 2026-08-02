const inputEl = document.getElementById("inputEl");
const paragraphEl = document.getElementById("paragraphEl");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");
const toggleTheme = document.getElementById("toggleTheme");

function updateUI() {
  const text = inputEl.value;
  paragraphEl.textContent = text;
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

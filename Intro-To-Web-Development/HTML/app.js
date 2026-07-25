const resultEl = document.getElementById("result");

function checkAnswer(isTrue) {
  const result = document.getElementById("result");

  if (isTrue === false) {
    result.textContent = "✅ Correct! HTML is not a programming language.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong! HTML is a markup language.";
    result.style.color = "red";
  }
}

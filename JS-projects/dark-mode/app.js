const toggle = document.getElementById("toggle");
const h1 = document.querySelector("h1");

const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.style.backgroundColor = "#07080c";
    h1.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = bodyBackgroundColor;
    h1.style.color = "#000000";
  }
});

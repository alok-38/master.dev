const ball = document.getElementById("ball");

let x = 0;
let y = 0;
const speed = 10;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      y -= speed;
      break;
    case "ArrowDown":
      y += speed;
      break;
    case "ArrowLeft":
      x -= speed;
      break;
    case "ArrowRight":
      x += speed;
      break;
    default:
      break;
  }

  ball.style.top = y + "px";
  ball.style.left = x + "px";
});

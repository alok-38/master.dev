const elements = document.querySelectorAll(
  ".btn.btn-open, .btn.btn-close, .modal-overlay",
);

const modalOverlay = document.getElementById("modal-overlay");

elements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const el = event.currentTarget;

    if (el.classList.contains("btn-open")) {
      modalOverlay.classList.remove("hidden");
    } else if (
      el.classList.contains("btn-close") ||
      el.classList.contains("modal-overlay")
    ) {
      modalOverlay.classList.add("hidden");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalOverlay.classList.add("hidden");
  }
});

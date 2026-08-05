const openModalButton = document.getElementById("open-modal-btn");
const closeModalButton = document.getElementById("close-modal-btn");
const modalOverlay = document.getElementById("modal-overlay");

openModalButton.addEventListener("click", () => {
  modalOverlay.classList.toggle("hidden");
});

closeModalButton.addEventListener("click", () => {
  modalOverlay.classList.toggle("hidden");
});

const dogBtn = document.getElementById("dog-btn");
const dogImg = document.getElementById("dog-target");

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

dogBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(DOG_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    dogImg.innerHTML = `<img src="${data.message}" alt="Random dog">`;
  } catch (error) {
    console.error(error);
  }
});

const button = document.getElementById("dog-btn");
const dogContainer = document.getElementById("dog-target");
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const renderDogs = () => {
  fetch(DOG_URL)
    .then((response) => response.json())
    .then((data) => {
      // data.message contains the image URL
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.maxWidth = "300px";

      // Clear previous image
      dogContainer.innerHTML = "";
      dogContainer.appendChild(img);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
};

// Attach click event
button.addEventListener("click", renderDogs);

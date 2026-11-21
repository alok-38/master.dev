const buttonEl = document.querySelector("button");
const mainEl = document.querySelector("main");

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function addNewDog() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.text();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const dogObject = JSON.parse(processedResponse);
      const image = document.createElement("img");
      image.src = dogObject.message;
      image.alt = "Cute dog!";
      mainEl.appendChild(image);
    });
}

buttonEl.addEventListener("click", addNewDog);

const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/firefox2.png") {
  } else {
    myImage.setAttribute("src", "/images/firefox-icon.png");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.addEventListener("click", setUserName);

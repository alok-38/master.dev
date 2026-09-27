const myName = "Brian Holt";
console.log(myName);
const occupation = "Programmer";
const profile = `My name is ${myName} and I'm a ${occupation}`;
console.log(profile);
const firstName = "sarah";
const lastName = "connor";
const capitalizedGreeting = `Hello ${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(capitalizedGreeting);

function capitalizedFirstLetter(firstName, lastName) {
  return (
    String(firstName).charAt(0).toUpperCase() +
    String(firstName).slice(1) +
    " " +
    String(lastName).charAt(0).toUpperCase() +
    String(lastName).slice(1)
  );
}

console.log(capitalizedFirstLetter("alokananda", "y"));

// email checker string inclusion
const userEmail = "user@domain.com";

if (userEmail.includes("@") && userEmail.endsWith(".com")) {
  console.log("success!");
} else {
  console.log("Failure");
}

// Password masker
function passwordMasker(password) {
  return "*".repeat(password.length);
}

console.log(passwordMasker("hello"));

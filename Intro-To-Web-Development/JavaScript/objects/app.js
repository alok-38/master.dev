let student = {
  name: "Alice",
  age: 20,
  grade: "A",
  isActive: true,
};

console.log(student);

let car = {
  // key:    value
  brand: "Toyota", // String value
  year: 2023, // Number value
  isNew: true, // Boolean value
  colors: ["red", "blue", "white"], // Array value
  owner: null, // Null value
};

console.log(`Car brand: ${car.brand}`);
console.log(`Manufacturing year: ${car.year}`);
console.log(`Is it new?: ${car.isNew}`);
console.log(`Color: ${car.colors[0]}`);

if (car.owner === "Alok") {
  console.log(`Alok is the owner`);
} else {
  console.log(`${car.owner}`);
}

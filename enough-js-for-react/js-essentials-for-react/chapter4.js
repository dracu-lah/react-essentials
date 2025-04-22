// Chapter 4
console.log("Chapter 4: Destructuring");

const user = {
  name: "Alice",
  age: 30,
};

const items = ["Apple", "Banana", "Cherry"];

const { name, age } = user;
const [first, second] = items;

console.log("Destructured Name:", name);
console.log("Destructured Age:", age);
console.log("First Item:", first);
console.log("Second Item:", second);

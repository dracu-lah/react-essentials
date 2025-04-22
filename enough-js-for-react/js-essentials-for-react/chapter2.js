// Chapter 2

console.log("Chapter 2: Functions");

// Regular Function
function greetRegular(name) {
  return "Hello, " + name;
}

// Arrow Function
const greetArrow = (name) => "Hello, " + name;

console.log("Regular Function:", greetRegular("Alice"));
console.log("Arrow Function:", greetArrow("Bob"));

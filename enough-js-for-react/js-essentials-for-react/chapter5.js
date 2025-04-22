// Chapter 5

console.log("Chapter 5: Spread and Rest Operators");

const user = { name: "Alice", age: 30 };
const newUser = { ...user, location: "NY" };

console.log("New User (Spread):", newUser);

const addItems = (...args) => args.reduce((a, b) => a + b, 0);
console.log("Sum (Rest):", addItems(1, 2, 3, 4));

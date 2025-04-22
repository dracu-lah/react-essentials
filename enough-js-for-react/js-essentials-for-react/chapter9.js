// Chapter 9
console.log("Chapter 9: Array Methods");

const items = ["Apple", "Banana", "Cherry"];

console.log("Map to Uppercase:", items.map(item => item.toUpperCase()));
console.log("Filter by 'A':", items.filter(item => item.startsWith("A")));
console.log("Find 'Banana':", items.find(item => item === "Banana"));

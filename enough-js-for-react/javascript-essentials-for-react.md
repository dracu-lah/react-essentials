
# JavaScript Essentials for Getting Started with React

This guide covers the foundational JavaScript concepts you should be familiar with before diving into React development.

## 1. Variables and Constants
```js
const name = "John";
let age = 25;
```

## 2. Functions
### Regular Function
```js
function greet(name) {
  return "Hello, " + name;
}
```

### Arrow Function
```js
const greet = (name) => "Hello, " + name;
```

## 3. Objects and Arrays
```js
const user = {
  name: "Alice",
  age: 30,
};

const items = ["Apple", "Banana", "Cherry"];
```

## 4. Destructuring
```js
const { name, age } = user;
const [first, second] = items;
```

## 5. Spread and Rest Operators
```js
const newUser = { ...user, location: "NY" };
const addItems = (...args) => args.reduce((a, b) => a + b, 0);
```

## 6. Template Literals
```js
const greeting = `Hello, ${user.name}`;
```

## 7. ES Modules
```js
// file.js
export const add = (a, b) => a + b;

// anotherFile.js
import { add } from './file';
```

## 8. Promises and Async/Await
```js
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
};
```

## 9. Array Methods
```js
items.map(item => item.toUpperCase());
items.filter(item => item.startsWith("A"));
items.find(item => item === "Banana");
```

## 10. Conditional Statements and Ternary Operator
```js
const isAdult = age >= 18 ? "Yes" : "No";
```

---

With these concepts, you'll be ready to explore React effectively.

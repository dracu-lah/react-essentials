# 🚀 React Quickstart Guide


## 📦 1. Project Setup
Use **Vite** for the fastest setup:
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## ⚛️ 2. React Basics
### ✅ JSX
```jsx
const Hello = () => <h1>Hello, World!</h1>;
```

### ✅ Functional Components
```jsx
function App() {
  return <div>Welcome to React</div>;
}
```

### ✅ Props
```jsx
const Greet = ({ name }) => <p>Hello, {name}</p>;
<Greet name="Nevil" />
```

### ✅ State
```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

### ✅ Events
```jsx
<button onClick={handleClick}>Click me</button>
```

## 🌐 3. Folder Structure
```bash
src/
  components/
  pages/
  hooks/
  utils/
  App.jsx
  main.jsx
```

## 🛠️ 4. Useful Hooks
- `useState` - local state
- `useEffect` - side effects (like fetching)
- `useRef` - DOM refs or persistent values
- `useContext` - global state (lightweight)
- `useReducer` - complex state logic

## 📡 5. API Call Example
```jsx
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return users.map(user => <div key={user.id}>{user.name}</div>);
};
```

## 🧱 6. Component Composition
```jsx
const Card = ({ children }) => (
  <div className="p-4 rounded shadow">{children}</div>
);
```

## 🎯 7. Routing
```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

## 🧪 8. State Management Options
- **Local**: `useState`, `useReducer`
- **Global**: `Context API`, `Zustand`, `Redux`

## 🎨 9. Styling
- Tailwind CSS (fast & utility-based)
- CSS Modules / Styled Components

```bash
npm install -D tailwindcss
```

## 📁 10. Final Tips
- Keep components small and reusable
- Use `.env` for secrets
- Use `React DevTools` for debugging
- Follow a consistent folder structure
- Use `prop-types` or TypeScript for type safety

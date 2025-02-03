### 📦 **What is a Component in React?**  
A **Component** is a reusable piece of code in React that represents a part of the user interface (UI).  
There are two types:  
1. **Functional Components** (most common)  
2. **Class Components** (less common now)

Think of components like LEGO blocks—you combine them to build a complete structure (app).  

#### ✅ Example of a Functional Component:
```jsx
const Welcome = () => {
  return <h1>Welcome to React!</h1>;
};
```

You can reuse `<Welcome />` anywhere in your app.

---

### 📦 **What are Props (Properties)?**  
**Props** are inputs you pass to components to customize their behavior or appearance. They make components dynamic.  

#### ⚡ Example:
```jsx
const Greeting = (props) => {
  return <h2>Hello, {props.name}!</h2>;
};

const App = () => {
  return (
    <>
      <Greeting name="Wahid" />
      <Greeting name="Ali" />
    </>
  );
};
```
Here, `name` is a **prop**. It allows the `Greeting` component to display different names dynamically.

---

### 🚀 **Destructuring Props**  
Instead of accessing `props.name`, you can **destructure** props directly in the function parameters for cleaner code.  

#### 🔥 Destructured Example:
```jsx
const Greeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};
```
Now, `{ name }` directly refers to the prop `name`. This is the same as writing `props.name` but shorter and cleaner.

#### 🎯 Destructuring Multiple Props:
```jsx
const UserCard = ({ name, age, location }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const App = () => (
  <UserCard name="Hardeep" age={26} location="Ludhiana" />
);
```

---

### 💡 **Key Takeaways:**
- **Component:** A reusable UI piece (like a function).
- **Props:** Data passed to components to make them dynamic.
- **Destructuring:** A cleaner way to extract prop values.
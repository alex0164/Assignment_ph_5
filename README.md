# Dev Stack

## Description
Dev Stack is a React + TypeScript app that lets users browse different tech stacks and build their own personal list of tools and technologies they use ("Your Stacks"). It pulls stack data from a JSON file and displays it through a clean, component-based UI.

## Technology Used
- React
- TypeScript
- Vite
- CSS

## Features
1. **Browse Tech Stacks** – View a curated list of technologies loaded from a JSON data source.
2. **Build Your Own Stack** – Add and manage a personal collection of tools in "Your Stacks."
3. **Responsive Layout** – Includes a Nav, Banner, and Footer for a consistent, clean experience across the app.

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It's used because it makes it easier to describe what the UI should look like, and React converts it into regular JavaScript behind the scenes.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent — they're read-only inside that component. State is data a component manages internally and can change over time, usually based on user interaction.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component store and update its own data, and re-renders the component whenever that data changes. In this project, I used it to keep track of the stacks the user adds to "Your Stacks."

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run code in response to a component rendering or updating — like fetching data. I used it to load the stack data from the JSON file when the component first mounts, so the data is ready before the user sees the page.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which items changed, were added, or removed. Without unique keys, React can't efficiently track list items, which can cause bugs or incorrect rendering.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. For example, in "Your Stacks," if the user hasn't added any stacks yet, I show a message like "No stacks added yet" instead of an empty list.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props. To send data back up, the parent passes a function as a prop to the child, and the child calls that function (often with some data) whenever it needs to communicate back.

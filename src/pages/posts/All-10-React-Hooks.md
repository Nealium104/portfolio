---
title: 🖥️ All 10 Core React Hooks
pubDate: 08/22/2023
author: Neal Powers
layout: "../../layouts/MarkdownPostLayout.astro"
summary: A write up of all 10 React hooks
tags: react, resources, frameworks
---

Hi there. Neal here. This was made with a lot of different resources. The main links are to the documentation, but I also recommend this great [fireship](https://www.youtube.com/watch?time_continue=525&v=TNhaISOUy6Q&embeds_referring_euri=https%3A%2F%2Ffireship.io%2F&embeds_referring_origin=https%3A%2F%2Ffireship.io&source_ve_path=Mjg2NjMsMzY4NDIsMjg2NjY&feature=emb_logo) video on React. It served as an entry point to each one of these little write ups for me.

# React and its hooks

Welcome to my guide on all 10 core React hooks. Each one is a very short explanation as well as an easy example for getting your brain wrapped around it. If you really want to understand and be able to use these hooks, I recommend building with them! Feel free to come back here like I do just to get your brain around them as you start using some of the more exotic hooks here.

## [useState](https://react.dev/reference/react/useState)

- used to handle data that can change (state). Has a default value that you define.
- The array is first reactive state, and then a setter for that data.

```jsx
import { useState } from 'react' // Import useState

function useStateExample () {
	const [count, setCount] = useState(0) // Define what useState is tracking, the function it will set, and the default value.

	const handleClick = () => { // Define a handler function that will define how the data will actually change
		setCount(count + 1)
	}

	return (
		<h1>You've clicked {count} number of times.</h1> // Figure out where the value will be displayed
		<button onClick={handleClick} >Click!</button> // Use an event to track user interaction
	)
}
```

## [useEffect](https://react.dev/reference/react/useEffect)

- Handles things at the main lifecycle points, has a dependency array for tracking specific data. This is specifically for side effects only.
- useEffect takes a function your define as its first argument
- As its second argument, it takes a dependency array. If it's empty, it will only run once, when the component is mounted

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function Counter() {
  // Declare state variables
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Handle click event
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Side effect for updating document title
  useEffect(() => {
    // This code runs after every render when 'count' changes
    document.title = `Count: ${count}`;

    // Cleanup function (optional)
    return () => {
      document.title = `React App`;
    };
  }, [count]); // Dependency array

  // Side effect for fetching data
  useEffect(() => {
    // This code runs only when 'count' reaches 10
    if (count === 10) {
      axios.get("https://api.example.com/data").then((response) => {
        setData(response.data);
      });
    }
  }, [count]); // Dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      {data && <p>Data fetched: {JSON.stringify(data)}</p>}
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default Counter;
```

## [useContext](https://react.dev/reference/react/useContext)

- lets you read and subscribe to [context](https://react.dev/learn/passing-data-deeply-with-context) from your component.
- You basically wrap your components with a provider

```jsx
import React, { useContext } from "react";

// Create a context
const ThemeContext = React.createContext("light");

function App() {
  return (
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// A component in the middle doesn't have to pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // Use a Consumer to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  const theme = useContext(ThemeContext);

  return <button theme={theme}>I am styled by the theme context!</button>;
}
```

## [useRef](https://react.dev/reference/react/useContext)

- a React Hook that lets you reference a value that’s not needed for rendering.
- This can be used for anything that doesn't need to render, but is often used to grab DOM elements
- Highly connected to useState, as they do basically the same thing, but useState is for when you need the change to render.
- Also, worth mentioning that refs persist their values across renders, unlike state which will trigger a rerender.

```jsx
import { useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStartClick = () => {
    if (intervalRef.current !== null) return; // To ensure we don't start multiple intervals

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const handleStopClick = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>{seconds} seconds</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
}

export default Stopwatch;

// A second example to show grabbing HTML elements

function App() {
  const myBtn = useRef(null);

  const handleClick = () => myBtn.current.click();

  return <button ref={myBtn}>Click!</button>;
}
```

## [useReducer](https://react.dev/reference/react/useReducer)

- This uses the "Redux pattern", which is basically a more complicated way to do state. But this can be useful when you start getting into lots and lots of different state changes. Instead of using a billion state changes, you can useReducer to reduce them to one.
- Basically, you dispatch (that's what the second argument in the array of the hook is) actions that go into a reducer function and that reducer function decides how to compute the next state.
- More specifically, you'll take the state and then get a UI element that will affect the state. Then you dispatch the action using a type: 'data' (in the example "decrement" or "increment") that will always be a string. Then you'll pass it to the reducer function which is basically just a long switch statement that says "tell me what that type is. I'll do this with the state"

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <span>Count: {state}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

## [useMemo](https://react.dev/reference/react/useMemo)

- This hook is for caching expensive calculations. Keep in mind, not every calculation needs to be memoized.
- You basically just set useMemo as the value of whatever function is expensive to use.

```jsx
function App() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);

  return <></>;
}
```

## [useCallback](https://react.dev/reference/react/useCallback)

- This is the functional version of useMemo.
- When you define a new function in a component, a new function object is created each time the component is re-rendered. Usually not a big deal, but if it is, you can memoize the actual function.
- This is mostly useful for when you're passing a function through multiple children

```jsx
function App() {
  const [count, setCount] = useState(60);

  const showCount = useCallback(() => {
    alert(`Count is ${count}`);
  }, [count]);

  return (
    <>
      {" "}
      <SomeChild handler={showCount} />{" "}
    </>
  );
}
```

## [useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)

- Not used very often, but it is used to modify the behavior of an exposed ref
- Used when you're creating a library and need to forward a ref to the user of the library
- Not really worth my time to learn, but here's an example anyway

```jsx
function App() {
  const ref = useRef(null);
  return <CoolButton ref={ref}></CoolButton>;
}

function CoolButton(props, ref) {
  const myBtn = useRef(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("clicking the button!");
      myBtn.current.click();
    },
  }));
}

CoolButton = forwardRef(CoolButton);
```

## [useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

- Also not often used, but it has a few use cases.
- Basically a useEffect, but it is ran after the change, but before the render happens. It is actually blocking, so it'll stop the render until it's finished
- Can be used when you need to calculate something in the UI before the DOM is updated

```jsx
function App() {
  const myBtn = useRef(null);

  useLayoutEffect(() => {
    const rect = myBtn.current.getBoundingClientRect();
    console.log(rect.height);
  });

  return (
    <>
      <button ref={myBtn}></button>
    </>
  );
}
```

## [useDebugValue](https://react.dev/reference/react/useDebugValue)

- Used when you're making your own hooks

```jsx
import { useState, useEffect, useDebugValue } from "react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  useDebugValue(isMobile ? "Mobile" : "Desktop");

  return isMobile;
}

function App() {
  const isMobile = useIsMobile(1024);
  return <div>{isMobile ? "Mobile mode" : "Desktop mode"}</div>;
}

export default App;
```

# That's all, folks!

Thanks for reading! I hope you found something useful to you on your journey. Check back for more!

import React from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = React.useState(true);
  function toggle() {
    setShow((prevState) => {
      return !prevState;
    });
  }
  return (
    <main className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}

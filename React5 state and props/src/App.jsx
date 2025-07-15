import React from "react";
import pads from "./pads";
import { Pad } from "./Components/Pad";
export default function App(props) {
  // dynamic class names baased on the property of props

  const [myPads, setMyPads] = React.useState(pads); // pads = array of objects
  const styles = {
    backgroundColor: props.darkmode ? "#1c1917" : "white",
  };

  /*function handleClick(id) {
    console.log(id);
    setMyPads((prevState) => {
      prevState.map((pad) => {
        if (pad.id == id) {
          return { ...pad, on: !pad.on };
        } else {
          return pad;
        }
      });
    });
  }*/

  function handleClick(id) {
    // map over the pads array, and if the current item has the same id as the one passed to this function, then
    // flip its value "on" to "off" and vice versa
    setMyPads((prevState) => {
      return prevState.map((pad) => {
        if (pad.id === id) {
          return { ...pad, on: !pad.on };
        } else {
          return pad;
        }
      });
    });
  }

  // Map over
  const padElements = myPads.map((pad) => {
    // array element with html
    return (
      <Pad
        id={pad.id}
        key={pad.id}
        color={pad.color}
        className={pad.on}
        toggle={handleClick}
      />
    );
  });

  return (
    <main style={styles}>
      <div className="pad-container">{padElements}</div>
    </main>
  );
}

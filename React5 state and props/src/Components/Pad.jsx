import React from "react";

export function Pad(props) {
  console.log(props);
  const styles = {
    backgroundColor: props.color,
  };

  // define state -- bad practice to do it like this

  /*const [padOn, setPadOn] = React.useState(props.className); // className -> on/off

  // click event for the buttons to flip state
  function hanleClick() {
    setPadOn((prevState) => {
      return !prevState;
    });
  }*/
  return (
    <button
      style={styles}
      className={props.className ? "on" : undefined}
      /*onClick={hanleClick} -- move it to the App(Parent) component, to have the single source of unified truth*/
      //onClick={props.toggle} // we cant have onClick toggle function() in  a nomal manner here in normal fashion here
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}

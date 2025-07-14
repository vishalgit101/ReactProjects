import "/src/index.css";
import React from "react";

/*// add  button for displaying the the punch line
export default function MyJokes(props) {
  // using truthy value and react conditional rendering
  console.log(props);
  return (
    <div>
      {props.setup && <p className="setUp">Setup: {props.setup}</p>}
      <p className="punchline">Punchline:{props.punchline}</p>
      <hr />
    </div>
  );
}*/

/*
{props.setup ? (
  <p className="setUp">Setup: {props.setup}</p>
) : (
  <p className="setUp">No setup provided.</p>
)}
  Use this if you want to render something else when setup is missing.
*/

/*
React will treat 0, false, or empty string "" as "existing" in some cases. If you only want to render when setup has meaningful content, use:

{props.setup?.trim() && <p>Setup: {props.setup}</p>}
*/

// adding  button for displaying the the punch line
export default function MyJokes(props) {
  // using truthy value and react conditional rendering
  console.log(props);

  const [punchLine, setPunchLine] = React.useState(false);

  function showPunchLine() {
    setPunchLine((prevState) => {
      return !prevState;
    });
  }

  /*return (
    <div>
      {props.setup && <p className="setUp">Setup: {props.setup}</p>}
      <p className="punchline">
        {" "}
        {punchLine
          ? props.punchline
          : //: "Click the Button to display punch line"  ""}
      </p>
      <button className="punchline-btn" onClick={showPunchLine}>
        Show Punchline
      </button>
      <hr />
    </div>
  );*/

  // We could also do it like this, to have the entire element hidden not just text similar to how we did with props.setup
  //this && thingy is similar to tinery operator i think
  return (
    <div>
      {props.setup && <p className="setUp">Setup: {props.setup}</p>}
      {punchLine && <p className="punchline">Punchline:{props.punchline}</p>}
      <button className="punchline-btn" onClick={showPunchLine}>
        {punchLine ? "Hide Punchline" : "Show Punchline"}
      </button>
      <hr />
    </div>
  );
}

import React from "react";
function Joke(props) {
  // state and vaibales declartions
  const [isShowm, setIsShown] = React.useState(false);

  function clickHandler() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }

  return (
    <div>
      <h2>Jokes {props.num}</h2>
      <p>Setup: {props.setup}</p>

      {isShowm ? <p>Punchline:{props.punchline}</p> : ""}

      <button onClick={clickHandler}>
        {isShowm ? "Hide PunchLine" : "ShowPunchLine"}
      </button>
    </div>
  );
}

export default Joke;

import jokes from "../jokes"; // array of objects
import Joke from "./Joke";

import React from "react";
import padsData from "../pads";
import Pad from "./Pad";

function MyMain(props) {
  // define variables and states

  const firstName = "Vishal";
  const lastName = "Choudhary";

  const pokemons = ["bulbasaur", "charmander", "sindaquil", "squirtle"];

  // for each of the pokemon name should come in li element..
  // we will be using .map

  const pokemonsElements = pokemons.map((poke) => {
    return <li> {poke[0].toUpperCase() + poke.slice(1)}</li>;
  });

  console.log(pokemonsElements);

  // adding props to our Joke Component
  console.log(jokes);
  let num = 0;
  const jokeElements = jokes.map((joke) => {
    num++;
    return <Joke setup={joke.setup} punchline={joke.punchline} num={num} />;
  });

  // pads section
  const styles = {
    backgroundColor: props.darkmode ? "#1c1917" : "white",
  };
  const [padsStateList, setPadStateList] = React.useState(padsData);

  // map over padsStateList and create Pad elemenets with props
  const padElements = padsStateList.map((padEl) => {
    return (
      <Pad
        key={padEl.id}
        id={padEl.id}
        color={padEl.color}
        on={padEl.on}
        toggle={handleClick}
      />
    );
  });

  function handleClick(id) {
    setPadStateList((prevStateList) => {
      // prev state is an array of objects
      return prevStateList.map((padEl) => {
        // map will already redturn the array
        if (padEl.id == id) {
          return { ...padEl, on: !padEl.on };
        } else {
          return padEl;
        }
      });
    });
  }

  return (
    <>
      <h1>
        This is the main Block of our web page, built by {firstName} {lastName}
        {/*Using javascript expression here*/}
      </h1>
      <div>
        <h2>Pokemons with PokeElements</h2>
        <ul>{pokemonsElements}</ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          asperiores nesciunt itaque. Pariatur provident et porro saepe beatae,
          nam natus quasi quis? Vel nisi amet mollitia velit cumque quia quam?
        </p>
      </div>
      <div>
        <h2>This div is for jokes </h2>
        {jokeElements}
      </div>
      <div className="bodyClass">
        <h2 className="padsHeading">This is for pad section</h2>
        <div className="mainClass" style={styles}>
          <div className="pad-container">{padElements}</div>
        </div>
      </div>
    </>
  );
}

export default MyMain;

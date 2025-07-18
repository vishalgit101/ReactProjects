import React from "react";
import MyDiceComp from "./MyDiceComp";

export default function MyMain() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    let dice = { id: i, selected: false, number: i + 1 };
    arr.push(dice);
  }
  console.log(arr);

  const [dices, setDices] = React.useState(arr);
  const [won, setWon] = React.useState(false);

  function toggle(id) {
    setDices((prevState) => {
      // prevDiceArray
      return prevState.map((dice) => {
        if (id == dice.id) {
          return { ...dice, selected: !dice.selected };
        } else {
          return dice;
        }
      });
    });
  }

  // now for each element of arr create MyDiceComp
  const diceElements = dices.map((dice) => {
    return (
      <MyDiceComp
        key={dice.id}
        id={dice.id}
        selected={dice.selected}
        number={dice.number}
        toggle={toggle}
      />
    );
  });

  function rollDice() {
    //if game won we dont roll and breaks out of the function
    let gameWon = true;
    for (let i = 0; i < dices.length; i++) {
      if (dices[0].number != dices[i].number || dices[i].selected == false) {
        /*&& dices[i].selected == true*/
        console.log("dices[0]: " + dices[0] + " and dices[i]: " + dices[i]);
        gameWon = false;
        break;
      }
    }

    setWon(gameWon);
    console.log("gamewon: " + gameWon);
    if (!won) {
      setDices((prevState) => {
        // previous dice array
        return prevState.map((dice) => {
          let rand = Math.trunc(Math.random() * 6) + 1;
          if (!dice.selected) {
            return { ...dice, number: rand };
          } else {
            return dice;
          }
        });
      });
    }
  }

  function newGame() {
    setDices((prevState) => {
      return prevState.map((dice) => {
        let rand = Math.trunc(Math.random() * 6) + 1;
        return { ...dice, number: rand, selected: false };
      });
    });
    setWon(false);
  }

  return (
    <main className="main">
      <div className="main-div">
        <h1>Tenzies</h1>
        <p>
          Roll untill are dice are the same. Click each dice to freeze it at
          current value between roles.
        </p>
      </div>
      <div className="">
        <div className="container-dice testimonial-grid">{diceElements}</div>
      </div>
      <div className="roll-div">
        {!won ? (
          <button onClick={rollDice} className="roll-btn">
            Roll Dice
          </button>
        ) : (
          <button onClick={newGame} className="roll-btn">
            New Game
          </button>
        )}
        {won && <h2 className="win-message">🎉 You won! 🎉</h2>}
      </div>
    </main>
  );
}

import React from "react";

export default function App() {
  // code for useState and setState

  const [count, setCount] = React.useState(0); // [count, func()]

  function incCount() {
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    }); // use this
  }

  function decCount() {
    //setCount(count -1) // avoid this direct setCount

    // or Use this, callback or arrow functions, its usefull when you need previous value of the state
    setCount(function (prevCount) {
      // we dont even have to name the param as count, react knows it's taking count here
      console.log(prevCount);
      return prevCount - 1;
    });
  }

  // For Second Section
  const [goingOut, setGoingOut] = React.useState(false); // array destructuring

  function changeState() {
    /* setGoingOut((prevState) => {
      if (prevState == true) {
        return false;
      } else {
        return true;
      }
    });*/

    // could use terinary operator as well
    setGoingOut((prevState) => (prevState ? false : true));
  }

  // For third section
  const [favtThings, setFavtThings] = React.useState([]); // passed: []; cos we are expecting array
  const allThings = [
    "Games",
    "Studying",
    "Fun",
    "Science",
    "Sleep",
    "Free Time",
    "Socalize",
    "Cooking",
  ];

  /* function addFavtThing() {
    setFavtThings((prevFavtThings) => {
      return [...prevFavtThings, "Test"];
    });

    console.log(favtThings);
  }*/

  function addFavtThing() {
    setFavtThings((prevFavtThings) => {
      return [...prevFavtThings, allThings[prevFavtThings.length]];
    });
  }

  const thingsElements = favtThings.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  return (
    <main>
      <div className="container">
        <h1>Counter Inc and Dec on the Click of Button</h1>
        <div className="countIndicator">
          <div className="num">{count}</div>
        </div>
        <div className="buttons">
          <button name="inc" className="button inc" onClick={decCount}>
            -
          </button>
          <button name="dec" className="button dec" onClick={incCount}>
            +
          </button>
        </div>
      </div>

      <article>
        <div className="container">
          <h1>Do i feel like going out tonight?</h1>
          <div className="countIndicator">
            <div className="num" onClick={changeState}>
              {goingOut ? "Yes" : "No"}
            </div>
          </div>
        </div>
      </article>

      <section className="sec3">
        <div className="sec3-div">
          <div className="sec3-div2">
            <button className="add-item" onClick={addFavtThing}>
              Add Item
            </button>
          </div>
          <div className="item-div">
            <ul className="ul-favt"> {thingsElements}</ul>
          </div>
        </div>
      </section>
    </main>
  );
}

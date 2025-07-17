import React from "react";

export default function StarWar() {
  const [starwarsData, setStarwarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  function handleClick() {
    setCount((prevState) => {
      return prevState + 1;
    });
  }

  /*async function starwarApi() {
    try {
      //const res = await fetch("https://swapi.dev/api/people/1");
      const res = await fetch(`https://swapi.py4e.com/api/people/${count}/`);
      if (!res.ok) {
        throw new Error("Failed to fetch SWAPI data");
      }
      const data = await res.json();
      console.log(data);

      setStarwarsData(data);
    } catch (error) {}
  }*/

  React.useEffect(() => {
    async function starwarApi() {
      try {
        //const res = await fetch("https://swapi.dev/api/people/1");
        const res = await fetch(`https://swapi.py4e.com/api/people/${count}/`);
        if (!res.ok) {
          throw new Error("Failed to fetch SWAPI data");
        }
        const data = await res.json();
        console.log(data);

        setStarwarsData(data);
      } catch (error) {}
    }
    starwarApi();
  }, [count]);

  // side affects - useEffect

  return (
    <section className="starWar">
      <div>
        <h1>Counter</h1>
        <button onClick={handleClick}>Add</button>
        <span>{count}</span>
      </div>

      <h1>Starwar Api request data!</h1>
      <div>
        {/*<pre>{JSON.stringify({ starwarsData })}</pre>*/}
        <pre>{JSON.stringify({ starwarsData }, null, 2)}</pre>
      </div>
    </section>
  );
}

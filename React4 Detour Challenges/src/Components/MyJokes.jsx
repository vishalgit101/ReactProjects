import "/src/index.css";
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
}

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

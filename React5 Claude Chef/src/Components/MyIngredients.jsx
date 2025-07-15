export function MyIngredients(props) {
  console.log(props);

  const ingredientsList = props.ingredientsList.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  return (
    <section>
      {/*could have surrounded the entire <section> with one conditional, my way was dumb and redundent
            ingredientListState.length > 3 ?, because we want minimum of 4 items before any api call for recepi is made*/}
      {ingredientsList.length > 0 ? <h2>Ingredients on hand:</h2> : null}
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      {ingredientsList.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={() => props.handleClick()}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}

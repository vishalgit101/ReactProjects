import "/src/index.css";
import React from "react";
export default function MyMain() {
  const ingredients = ["Oregano", "Chicken", "Tomatoes"];

  /*const ingredientsList = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("form submitted");

    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient"); // coz name = ingredient in input field

    ingredients.push(ingredient);
    console.log(ingredient);
    console.log(ingredients);
  }*/

  // stateChange kwoledge gained

  const [ingredientListState, setIngredientListState] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]); // returns an array; passed [] cos i'll be passing array in the setter
  // we could have passed values in the React.useState(["Oregano, Grapes"]) as we did in the count excercise
  const ingredientsList = ingredientListState.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("form submitted");
    const formEl = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient"); // coz name = ingredient in input field

    ingredients.push(ingredient); // wont chnage the view
    console.log(ingredient);
    console.log(ingredients);

    // we need to use the React.useState
    setIngredientListState((prevListState) => {
      return [...prevListState, ingredient];
    });

    //formData.reset();
    formEl.reset();
  }

  // boolean state for the conditional rendering
  const [isShown, setIsShown] = React.useState(false);

  function aiResponse() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }

  return (
    <main>
      <div className="container">
        <form className="add-form" onSubmit={submitForm}>
          <input type="text" placeholder="e.g oregano" name="ingredient" />
          <button>Add Ingredient</button>
        </form>
        <section>
          {/*could have surrounded the entire <section> with one conditional, my way was dumb and redundent
            ingredientListState.length > 3 ?, because we want minimum of 4 items before any api call for recepi is made*/}
          {ingredientListState.length > 0 ? (
            <h2>Ingredients on hand:</h2>
          ) : null}
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsList}
          </ul>
          {ingredientListState.length > 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={aiResponse}>Get a recipe</button>
            </div>
          ) : null}
        </section>
        {/** Paste recipeCode.md contents here */}

        {isShown && (
          <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
              <p>
                Based on the ingredients you have available, I would recommend
                making a simple a delicious{" "}
                <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
              </p>
              <h3>Beef Bolognese Pasta</h3>
              <strong>Ingredients:</strong>
              <ul>
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>
                  8 oz pasta of your choice (e.g., spaghetti, penne, or
                  linguine)
                </li>
              </ul>
              <strong>Instructions:</strong>
              <ol>
                <li>
                  Bring a large pot of salted water to a boil for the pasta.
                </li>
                <li>
                  In a large skillet or Dutch oven, cook the ground beef over
                  medium-high heat, breaking it up with a wooden spoon, until
                  browned and cooked through, about 5-7 minutes.
                </li>
                <li>
                  Add the diced onion and minced garlic to the skillet and cook
                  for 2-3 minutes, until the onion is translucent.
                </li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>
                  Add the crushed tomatoes, beef broth, oregano, and basil.
                  Season with salt and pepper to taste.
                </li>
                <li>
                  Reduce the heat to low and let the sauce simmer for 15-20
                  minutes, stirring occasionally, to allow the flavors to meld.
                </li>
                <li>
                  While the sauce is simmering, cook the pasta according to the
                  package instructions. Drain the pasta and return it to the
                  pot.
                </li>
                <li>
                  Add the Bolognese sauce to the cooked pasta and toss to
                  combine.
                </li>
                <li>
                  Serve hot, garnished with additional fresh basil or grated
                  Parmesan cheese if desired.
                </li>
              </ol>
            </article>
          </section>
        )}
      </div>
    </main>
  );
}

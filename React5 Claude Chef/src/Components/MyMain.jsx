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

  const [ingredientListState, setIngredientListState] = React.useState([]); // returns an array; passed [] cos i'll be passing array in the setter
  // we could have passed values in the React.useState(["Oregano, Grapes"]) as we did in the count excercise
  const ingredientsList = ingredientListState.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("form submitted");

    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient"); // coz name = ingredient in input field

    ingredients.push(ingredient); // wont chnage the view
    console.log(ingredient);
    console.log(ingredients);

    // we need to use the React.useState
    setIngredientListState((prevListState) => {
      return [...prevListState, ingredient];
    });
  }

  return (
    <main>
      <div className="container">
        <form className="add-form" onSubmit={submitForm}>
          <input type="text" placeholder="e.g oregano" name="ingredient" />
          <button>Add Ingredient</button>
        </form>
        <ul className="ingredients-list">{ingredientsList}</ul>
      </div>
    </main>
  );
}

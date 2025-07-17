import "/src/index.css";
import React, { useRef } from "react";
import { MyRecipe } from "./MyRecipe";
import { MyIngredients } from "./MyIngredients";
import { getRecipeFromMistral } from "../ai.js";

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
    "chicken",
    "tomato paste",
  ]); // returns an array; passed [] cos i'll be passing array in the setter
  // we could have passed values in the React.useState(["Oregano, Grapes"]) as we did in the count excercise

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
  // const [isShown, setIsShown] = React.useState(false); need to change this for actual response

  /*
  async function aiResponse() {
    const res = await getRecipeFromMistral(ingredientListState);
    // this will trigger when the get recipe is clicked
    setIsShown((prevState) => {
      console.log(res);
      return !prevState;
    });
  }*/

  // Now we are working with actual AI
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = useRef(null);

  console.log(recipeSection);
  // its null now but will become <div> where this recipeSection is passed in the ref, e:g ref={recipeSection}

  React.useEffect(() => {
    function scroll() {
      // decpendencies array is empty so it will only run when the ap first laods and this is mounted but that time condtional is not satisfied
      // so we will inc the recipe in the dependeincies array
      if (recipe != "" && recipeSection.current != null) {
        recipeSection.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    scroll();
  }, [recipe]);

  async function aiResponse() {
    const res = await getRecipeFromMistral(ingredientListState);
    // this will trigger when the get recipe is clicked
    console.log(res);
    setRecipe(res);
  }

  return (
    <main>
      <div className="container">
        <form className="add-form" onSubmit={submitForm}>
          <input type="text" placeholder="e.g oregano" name="ingredient" />
          <button>Add Ingredient</button>
        </form>
        <MyIngredients
          ref={recipeSection}
          ingredientsList={ingredientListState}
          handleClick={aiResponse}
        />
        {/** Paste recipeCode.md contents here */}

        {
          /*This says if recipe is truthy i.e not empty string show recipe*/ recipe && (
            <MyRecipe recipe={recipe} />
          )
        }
      </div>
    </main>
  );
}

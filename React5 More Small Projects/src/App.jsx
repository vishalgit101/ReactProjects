import React from "react";
import avatar from "./images/user.png";
import Star from "./Components/Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    console.log("Toggle Favorite");
    setContact((prevState) => {
      // prevsatte is an object

      return { ...prevState, isFavorite: !prevState.isFavorite };
    });
  }

  console.log(contact);

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />{" "}
          {/*Pass the useState */}
          <h2 className="name">{contact.firstName + " " + contact.lastName}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

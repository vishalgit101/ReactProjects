import { useState } from "react";
import { Link } from "react-router-dom";
//import "index.css";
//imports for warrper context
import ComponentA from "./WrapperComponents/ComponentA";

function App() {
  return (
    <main>
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile Page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        <h1>Wrapper Components</h1>
        <ComponentA />
      </div>
    </main>
  );
}

export default App;

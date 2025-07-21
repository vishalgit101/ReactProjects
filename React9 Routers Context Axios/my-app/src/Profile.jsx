import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile.jsx";
export default function Profile() {
  const { name } = useParams();
  console.log("name from params:", name);

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
      {/*<Outlet />*/}
    </div>
  );
}

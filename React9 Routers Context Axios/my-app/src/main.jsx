import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile.jsx";
import ErrorPage from "./ErrorPage.jsx";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      {
        path: "spinach",
        element: <Spinach />,
      },
      {
        path: "popeye",
        element: <Popeye />,
      },
    ],
  },
]);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

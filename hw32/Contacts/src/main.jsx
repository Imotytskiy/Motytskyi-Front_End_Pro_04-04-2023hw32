import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Users from "./routes/users";
import Contact from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Users />,
  },
  {
    path: ROUTES.contact,
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

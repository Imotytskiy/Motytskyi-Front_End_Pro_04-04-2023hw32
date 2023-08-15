import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Users from "./routes/users";
import Contact from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";

const basename = import.meta.env.DEV
  ? "/"
  : "/Motytskyi-Front_End_Pro_04-04-2023/";

const router = createBrowserRouter(
  [
    {
      path: ROUTES.root,
      element: <Users />,
    },
    {
      path: ROUTES.contact,
      element: <Contact />,
    },
  ],
  { basename }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

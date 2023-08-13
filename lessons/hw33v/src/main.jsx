import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import Albums from "./routes/albums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getUsers from "./services/getUsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: getUsers,
  },
  {
    path: "/albums/:albumId",
    element: <Albums />,
  },
  // {
  //   path: "/photos",
  //   element: <Photos />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./routes/contact";
const router = createBrowserRouter([
  {
    path: "/",
    redirectTo: "/contacts",
    element: <Root />,
  },
  // {
  //   path: "contacts/",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

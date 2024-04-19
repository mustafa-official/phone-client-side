import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.jsx";
import AllPhones from "./components/AllPhones.jsx";
import Phone from "./components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/phones",
        element: <AllPhones></AllPhones>,
        loader: () => fetch("http://localhost:5000/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

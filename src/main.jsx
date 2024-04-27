import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import AddEdit from "./pages/AddEdit.jsx";
import View from "./pages/View.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addContact",
    element: <AddEdit />,
  },
  {
    path: "/update/:id",
    element: <AddEdit />,
  },
  {
    path: "/view/:id",
    element: <View />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

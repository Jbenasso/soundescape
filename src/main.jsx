import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vault from "./pages/Vault.jsx";
import Contact from "./pages/Contact.jsx";

import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "vault", element: <Vault /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
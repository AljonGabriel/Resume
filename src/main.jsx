import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

// Import the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import the Bootstrap Icons CSS

import About from "./pages/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/Resume/",
    element: <App />,
    children: [
      {
        path: "/Resume/",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

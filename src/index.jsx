import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./index.css"; // Global styles
import "bootstrap/dist/css/bootstrap.min.css"; 
import { ROUTES } from "./paths";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: ROUTES.ABOUT_ME, element: <AboutMe /> },
      { path: ROUTES.PORTFOLIO, element: <Portfolio /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.RESUME, element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
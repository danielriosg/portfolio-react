// src/components/Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import { ROUTES } from "../paths";

function Navigation() {
  return (
    <nav>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <NavLink
            to={ROUTES.ABOUT_ME}
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to={ROUTES.PORTFOLIO}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to={ROUTES.CONTACT}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to={ROUTES.RESUME}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
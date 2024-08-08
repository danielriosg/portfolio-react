// src/components/Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <NavLink to='/' end activeClassName='active' className='nav-link'>
            About Me
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/portfolio'
            activeClassName='active'
            className='nav-link'
          >
            Portfolio
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' activeClassName='active' className='nav-link'>
            Contact
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/resume' activeClassName='active' className='nav-link'>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;


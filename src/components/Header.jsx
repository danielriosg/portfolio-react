import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className='header-container bg-light p-3'>
      <div className='container'>
        <h1 className='text-primary'>Developer Name</h1>
        <nav>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/resume'>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

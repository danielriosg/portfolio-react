import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

function Header() {
  return (
    <header className='header-container bg-light py-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='display-4'>Developer Name</h1>
          </div>
        </div>
        <div className='row'>
          <nav className='col-12'>
            <ul className='nav justify-content-center'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/portfolio' className='nav-link'>
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/resume' className='nav-link'>
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

function Header() {
  return (
    <header className='custom-header py-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='display-4'>Developer Name</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navigation /> {/* Use Navigation component */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className='footer-container bg-dark text-white py-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p>Footer content goes here</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

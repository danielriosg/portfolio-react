import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className='footer bg-dark text-light py-3'>
      <div className='container text-center'>
        <div className='d-flex justify-content-center mb-2'>
          <a
            href='https://github.com/your-username'
            className='text-light mx-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='https://linkedin.com/in/your-profile'
            className='text-light mx-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
          
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
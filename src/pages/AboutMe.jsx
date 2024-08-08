import React from "react";
import "../styles/AboutMe.css" // Optional: Include styles specific to the About Me section

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='container text-center'>
        <img
          src='/path/to/your/photo.jpg'
          alt='Developer photo'
          className='avatar img-fluid rounded-circle mb-4'
        />
        <h2>About Me</h2>
        <p className='bio'>
          Hi, I'm [Your Name], a passionate web developer with experience in
          [mention key skills or experiences]. I love creating clean and
          efficient code and am always eager to learn new technologies.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

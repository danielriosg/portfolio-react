// src/components/Project.jsx
import React from "react";
import "../styles/Project.css";

const Project = ({ title, imageSrc, deployedUrl, githubUrl }) => {
  return (
    <div className='project'>
      <h2>{title}</h2>
      <img src={imageSrc} alt={`${title} screenshot`} />
      <div>
        <a href={deployedUrl} target='_blank' rel='noopener noreferrer'>
          Deployed Application
        </a>
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;

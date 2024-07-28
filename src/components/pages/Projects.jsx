import React from "react";
import { Link } from "react-router-dom";
import { project } from "../../helpers/ProjectList";

const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {project.map((project, index) => (
              <li key={index} className="project-item">
                <Link to={`/projects/${index}`}>
                  <h3 className="project-title">{project.title}</h3>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;

import React from 'react';
import { useParams } from 'react-router-dom';
import BtnGitHub from '../btnGithub/BtnGitHub';
import { project } from '../../helpers/ProjectList';

const Project = () => {
  const { id } = useParams();
  const currentProject = project[parseInt(id, 10)];

  if (!currentProject) {
    return <div>Проект не найден</div>;
  }

  return (
    <div>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{currentProject.title}</h1>
            <img
              src={currentProject.imgBig}
              alt={currentProject.title}
              className="project-details__cover"
            />
            <div className="project-details__desc">
              <p>Навыки: {currentProject.skills}</p>
            </div>
            <BtnGitHub link={currentProject.githubLink} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;

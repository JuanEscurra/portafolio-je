import React from 'react'

import './projects.css';
import { projects } from '../models';
import CardProject from '../cardProject/CardProject';

const Projects = () => {

  return (
    <div id="proyectos">
      <h3 className="projects__title">Proyectos realizados</h3>
      <div className="projects__list">
        {
          projects.map((project, index) => (
            <CardProject key={project.title} projectItem={project} number={index} />
          ))
        }
        <div className="project__item">

        </div>
      </div>
    </div>
  )
}

export default Projects
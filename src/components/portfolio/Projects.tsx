import { AppContext } from '../../App';
import React, { useContext, useEffect, useState } from 'react';
// import Projects from './Projects';
import { getPanelOffset } from './getPanelOffset';

const Projects = (params: any) => {
  const { projects } = useContext<any>(AppContext);
  const { title, projectsView } = projects;
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    params.setProjectsOffset(getPanelOffset('.projects'))
  })

  return (
    <section
      className='projects sliding-panel wrap container-fluid'
      data-section='projects'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <h2 className='category-title'>{title}</h2>
            <ul className="projects">
              {projectsView.map((project: any, index: number) => (
                <li key={index}>
                  <a href={project.link} target="_blank">
                    <div className="base-item" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                      <div className="info-bar">
                        <h3>{project.projectName}</h3>
                      </div>
                      <div className="slide-item" data-active={isShown}>
                        <p className="tech"><span>Tech: </span>{project.tech}</p>
                        <p className="capabilities"><span>Capabilities: </span>{project.capabilities}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

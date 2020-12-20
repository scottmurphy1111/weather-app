import React, { useState } from 'react'

const Project = (params: any) => {
  const [isShown, setIsShown] = useState(false);
  const {project} = params;

  console.log('params', params);
  return (
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
  )
}

export default Project;
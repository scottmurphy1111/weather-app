import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
// import Projects from './Projects';
import { getPanelOffset } from './getPanelOffset';

const Projects = (params: any) => {
  const { projects } = useContext<any>(AppContext);
  const { title } = projects;

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

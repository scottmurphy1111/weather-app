import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
// import Coding from './Coding';

const Skills = (params: any) => {
  const { skills } = useContext<any>(AppContext);
  const { title, skillset } = skills;

  useEffect(() => {
    params.setSkillsOffset(getPanelOffset('.skills'))
  })
  return (
    <section
      className='skills sliding-panel wrap container-fluid'
      data-section='skills'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <h2 className='category-title'>{title}</h2>
            {/* <Coding content={props.content} /> */}
            <ul className='skills show'>
              {skillset.map((skill: any, id: number) => <li key={id + 1}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


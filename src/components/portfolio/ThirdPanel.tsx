import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
// import Coding from './Coding';

const ThirdPanel = (params: any) => {
  const { thirdPanel } = useContext<any>(AppContext);
  const { title, skills } = thirdPanel;

  useEffect(() => {
    params.setThirdPanelOffset(getPanelOffset('.third-panel'))
  })
  return (
    <section
      className='third-panel sliding-panel wrap container-fluid'
      data-section='skills'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <h2 className='category-title'>{title}</h2>
            {/* <Coding content={props.content} /> */}
            <ul className='skills show'>
              {skills.map((skill: any, id: number) => <li key={id + 1}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdPanel;


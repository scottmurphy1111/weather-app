import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
// import Projects from './Projects';
import { getPanelOffset } from './getPanelOffset';

const SecondPanel = (params: any) => {
  const { secondPanel } = useContext<any>(AppContext);
  const { title } = secondPanel;

  useEffect(() => {
    params.setSecondPanelOffset(getPanelOffset('.second-panel'))
  })

  return (
    <section
      className='second-panel sliding-panel wrap container-fluid'
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

export default SecondPanel;

import React, { useContext, useEffect, useState } from 'react';
// import Skills from './Skills';
import { AppContext } from '../../App';
import { getPanelOffset } from './getPanelOffset';
import { Gear } from '../../assets/svgs';

const TopPanel = (params: any) => {
  const { topPanel } = useContext<any>(AppContext);
  const { name, position, subHeadingA, subHeadingB } = topPanel;
  const [show, setShow] = useState(false);

  useEffect(() => {
    params.setTopPanelOffset(getPanelOffset('.top-panel'));

    setTimeout(() => {
      setShow(true)
    }, 4500);
  })

  return (
    <section
      className='top-panel sliding-panel wrap container-fluid'
      data-section='home'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-static'>
            <div className='static-inner'>
              <Gear />
              <div className={`copy-block ${show ? "show" : ""}`}>
                <h1>
                  <span className='name show'>
                    {name}
                  </span>
                </h1>
                <p className='tagline show'>
                  {subHeadingA + ' '}
                  <br className='mobile-only' />
                  {subHeadingB}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopPanel;
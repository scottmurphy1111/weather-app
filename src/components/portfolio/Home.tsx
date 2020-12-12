import React, { useContext, useEffect, useState } from 'react';
// import Skills from './Skills';
import { AppContext } from '../../App';
import { getPanelOffset } from './getPanelOffset';
import { Gear } from '../../assets/svgs';

const Home = (params: any) => {
  const { home } = useContext<any>(AppContext);
  const { name, subHeadingA, subHeadingB } = home;
  const [show, setShow] = useState(false);

  useEffect(() => {
    params.setHomeOffset(getPanelOffset('.home'));

    setTimeout(() => {
      setShow(true)
    }, 4750);
  })

  return (
    <section
      className='home sliding-panel wrap container-fluid'
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

export default Home;
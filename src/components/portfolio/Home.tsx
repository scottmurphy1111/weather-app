import React, { useContext, useEffect, useState } from 'react';
// import Skills from './Skills';
import { AppContext } from '../../App';
import { getPanelOffset } from './getPanelOffset';
import { Gear } from '../../assets/svgs';

const Home = (params: any) => {
  const { home } = useContext<any>(AppContext);
  const { name, subHeadingA, subHeadingB } = home;
  const [show, setShow] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const disableScroll = () => {
    const body = document.body;
    return scrollable ? body.style.overflow = 'visible' : body.style.overflow = 'hidden';
  };

  useEffect(() => {
    params.setHomeOffset(getPanelOffset('.home'));
    disableScroll()

    setTimeout(() => {
      setShow(true);
      setScrollable(true);
    }, 4750);
  }, [scrollable]);

  return (
    <section
      className='home sliding-panel container-fluid'
      data-section='home'
    >
      <div className="wrap">
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
      </div>
    </section>
  );
}

export default Home;
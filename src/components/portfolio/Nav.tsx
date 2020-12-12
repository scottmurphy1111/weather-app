import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets/svgs';
import { getPanelOffset } from './getPanelOffset';

export default function VertNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5400);
  })
  const navItems = [
    {
      value: 'home',
      active: true
    },
    {
      value: 'about',
      active: false
    },
    {
      value: 'skills',
      active: false
    },
    {
      value: 'projects',
      active: false
    },
    {
      value: 'contact',
      active: false
    }
  ]

  
  const handleClick = ((e: any) => {
    console.log('clicked', );

    const selectedNav = e.target.dataset.nav;
    console.log('selectedNav', selectedNav);

    const section: HTMLElement | null = document.querySelector(`[data-section=${selectedNav}`);
    const scrollPosition = section?.offsetTop;

    window.scrollTo({top:scrollPosition, behavior: 'smooth'});
  })

  return (
    <div className={`nav ${show ? 'show' : ''}`}>
      <div className='wrap container-fluid'>
        <div className='row'>
          <div className='col-xs-3'>
            <span className='logo' data-nav='home' onClick={handleClick}>
              <Logo />
            </span>
          </div>
          <div className='col-xs-5 col-xs-offset-4'>
            <ul>
              {
                navItems.map((item: any, index: number) => {
                  if (index !== 0) {
                    return <li key={index} data-nav={item.value} onClick={handleClick}>{item.value}</li>
                  }
                })
              }
              {/* <li data-nav='projects' onClick={handleClick}>Projects</li>
              <li data-nav='skills' onClick={handleClick}>Skills</li>
              <li data-nav='about' onClick={handleClick}>About</li>
              <li data-nav='contact' onClick={handleClick}>Contact</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

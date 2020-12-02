import React, { useContext } from 'react';
// import Skills from './Skills';
import { AppContext } from '../../App'

export default function TopPanel() {
  const { topPanel } = useContext<any>(AppContext);
  const { name, position, subHeadingA, subHeadingB } = topPanel;

  return (
    <section
      className='top-panel sliding-panel fade-in'
      data-section='home'
      // onWheel={props.onWheel}
      // onTouchStart={props.onTouchStart}
      // onTouchMove={props.onTouchMove}
      // onTouchEnd={props.onTouchEnd}
    >
      <div className='panel-static'>
        {/* <div
          className={
            'static-inner  ' + (props.init.removeDelays ? 'remove-delay' : '')
          }
        > */}
        <div className='static-inner'>
          <h1>
            {/* <span
              className={
                'logo ' +
                (props.init.loadMainContent ? 'show' : '') +
                ' ' +
                (props.init.removeDelays ? 'remove-delay' : '')
              }
            > */}
            {/* <span
              className={
                'name ' +
                (props.init.loadMainContent ? 'show' : '') +
                ' ' +
                (props.init.removeDelays ? 'remove-delay' : '')
              }
            > */}
            <span className='name show'>
              {name}
            </span>
            <br className='mobile-only' />
            {/* <span
              className={
                'title ' +
                (props.init.loadMainContent ? 'show' : '') +
                ' ' +
                (props.init.removeDelays ? 'remove-delay' : '')
              }
            > */}
            <span className='title show'>
              {position}
            </span>
          </h1>
          {/* <p
            className={
              'tagline ' +
              (props.init.loadMainContent ? 'show' : '') +
              ' ' +
              (props.init.removeDelays ? 'remove-delay' : '')
            }
          > */}
          <p className='tagline show'>
            {subHeadingA + ' '}
            <br className='mobile-only' />
            {subHeadingB}
          </p>
          {/* <div
            className={
              'skills ' +
              (props.init.loadMainContent ? 'show' : '') +
              ' ' +
              (props.init.removeDelays ? 'remove-delay' : '')
            }
          >
            <Skills content={props.content} />
          </div> */}
          {/* <div className='skills show'>
            {skills.map((skill: any, id: number) => <li key={id + 1}>{skill}</li>)}
          </div> */}
        </div>
      </div>
    </section>
  );
}

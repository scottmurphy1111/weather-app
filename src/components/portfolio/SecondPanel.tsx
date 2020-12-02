import { AppContext } from '../../App';
import React, { useContext } from 'react';
// import Projects from './Projects';

export default function SecondPanel() {
  const { secondPanel } = useContext<any>(AppContext);
  const { title } = secondPanel;
  
  return (
    <section
      className='second-panel sliding-panel fade-out'
      data-section='projects'
      // onWheel={props.onWheel}
      // onTouchStart={props.onTouchStart}
      // onTouchMove={props.onTouchMove}
      // onTouchEnd={props.onTouchEnd}
    >
      <div className='panel-wrapper'>
        <div className='inner-wrap projects-list'>
          <h2 className='category-title'>{title}</h2>
          {/* <Projects content={props.content} /> */}
        </div>
      </div>
    </section>
  );
}

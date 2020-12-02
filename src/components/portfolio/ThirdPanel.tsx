import { AppContext } from '../../App';
import React, { useContext } from 'react';
// import Coding from './Coding';

export default function ThirdPanel() {
  const { thirdPanel } = useContext<any>(AppContext);
  const { title, skills } = thirdPanel;
  return (
  <section
    className='third-panel sliding-panel fade-out'
    data-section='skills'
    // onWheel={props.onWheel}
    // onTouchStart={props.onTouchStart}
    // onTouchMove={props.onTouchMove}
    // onTouchEnd={props.onTouchEnd}
  >
    <div className='panel-wrapper'>
      <div className='inner-wrap snippets'>
        <h2 className='category-title'>{title}</h2>
        {/* <Coding content={props.content} /> */}
         <div className='skills show'>
            {skills.map((skill: any, id: number) => <li key={id + 1}>{skill}</li>)}
          </div>
      </div>
    </div>
  </section>
);
  }


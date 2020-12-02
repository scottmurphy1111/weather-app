import { AppContext } from '../../App';
import React, { useContext } from 'react';
import About from './About';

export default function FourthPanel() {
  const { fourthPanel } = useContext<any>(AppContext);
  const { title, about } = fourthPanel;
  return (
<section
    className='fourth-panel sliding-panel fade-out'
    data-section='about'
    // onWheel={props.onWheel}
    // onTouchStart={props.onTouchStart}
    // onTouchMove={props.onTouchMove}
    // onTouchEnd={props.onTouchEnd}
  >
    <div className='panel-wrapper'>
      <div className='inner-wrap snippets'>
        <h2 className='category-title'>{title}</h2>
        {/* <About content={about} /> */}
        <ul className='skills show'>
            {about.map((item: any, id: number) => {
            return (
            <li key={id + 1}>
              <img src={`${process.env.PUBLIC_URL}${item.icon}`} alt={`${item.heading} image`} />
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </li>)}
          )}
          </ul>
      </div>
    </div>
  </section>
  );
}

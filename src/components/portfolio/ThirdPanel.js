import React from 'react';
import Coding from './Coding';

const ThirdPanel = props => (
  <section
    className='third-panel sliding-panel fade-out'
    onWheel={props.onWheel}
    onTouchStart={props.onTouchStart}
    onTouchMove={props.onTouchMove}
    onTouchEnd={props.onTouchEnd}
  >
    <div className='panel-wrapper'>
      <div className='inner-wrap snippets'>
        <h2 className='category-title'>{props.content.codingTitle}</h2>
        <Coding content={props.content} />
      </div>
    </div>
  </section>
);

export default ThirdPanel;

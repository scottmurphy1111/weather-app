import React from 'react';
import { Logo } from '../../assets/svgs';
import Skills from './Skills';

const TopPanel = props => (
  <section
    className='top-panel sliding-panel fade-in'
    onWheel={props.onWheel}
    onTouchStart={props.onTouchStart}
    onTouchMove={props.onTouchMove}
    onTouchEnd={props.onTouchEnd}
  >
    <div className='panel-static'>
      <div
        className={
          'static-inner  ' + (props.init.removeDelays ? 'remove-delay' : '')
        }
      >
        <h1>
          <span
            className={
              'logo ' +
              (props.init.loadMainContent ? 'show' : '') +
              ' ' +
              (props.init.removeDelays ? 'remove-delay' : '')
            }
          >
            <Logo />
          </span>
          <span
            className={
              'name ' +
              (props.init.loadMainContent ? 'show' : '') +
              ' ' +
              (props.init.removeDelays ? 'remove-delay' : '')
            }
          >
            {props.content.name}
          </span>
          <br className='mobile-only' />
          <span
            className={
              'title ' +
              (props.init.loadMainContent ? 'show' : '') +
              ' ' +
              (props.init.removeDelays ? 'remove-delay' : '')
            }
          >
            {props.content.title}
          </span>
        </h1>
        <p
          className={
            'tagline ' +
            (props.init.loadMainContent ? 'show' : '') +
            ' ' +
            (props.init.removeDelays ? 'remove-delay' : '')
          }
        >
          {props.content.subHeadingA + ' '}
          <br className='mobile-only' />
          {props.content.subHeadingB}
        </p>
        <div
          className={
            'skills ' +
            (props.init.loadMainContent ? 'show' : '') +
            ' ' +
            (props.init.removeDelays ? 'remove-delay' : '')
          }
        >
          <Skills content={props.content} />
        </div>
      </div>
    </div>
  </section>
);

export default TopPanel;

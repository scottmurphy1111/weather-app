import React from 'react';
import Skills from './Skills';

const TopPanel = props => 
    (
            <section className="top-panel sliding-panel fade-in" 
                onWheel={props.onWheel} 
                onTouchStart={props.onTouchStart}
                onTouchMove={props.onTouchMove}
                onTouchEnd={props.onTouchEnd}>
            <div className="panel-static">
                <div className={"static-inner  "  + (props.init.removeDelays ? 'remove-delay' : '')}>
                <h1>
                    <span className={"logo " + (props.init.loadMainContent ? 'show' : '') + ' ' + (props.init.removeDelays ? 'remove-delay' : '')}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="-23.9 -16.1 64 64">
                        <circle id="XMLID_27_" className="logo-circle" cx="8.4" cy="15.5" r="28.4"/>
                        <g id="XMLID_35_">
                            <line id="XMLID_28_" className="logo-lines" x1="5.9" y1="25.5" x2="11.5" y2="5.9"/>
                            <path id="XMLID_33_" className="logo-lines" d="M-1.8,8.6c-2.2,2.2-4.7,4.7-6.9,6.9l6.9,6.2"/>
                            <path id="XMLID_34_" className="logo-lines" d="M18.6,22.1c2.2-2.2,4.7-4.7,6.9-6.9l-6.9-6.2"/>
                        </g>
                        </svg>
                    </span>
                    <span className={"name " + (props.init.loadMainContent ? 'show' : '') + ' ' + (props.init.removeDelays ? 'remove-delay' : '')}>{props.content.name}</span>
                    <br className="mobile-only" /><span className={"title " + (props.init.loadMainContent ? 'show' : '') + ' ' + (props.init.removeDelays ? 'remove-delay' : '')}>{props.content.title}</span>
                </h1>
                <p className={"tagline " + (props.init.loadMainContent ? 'show' : '') + ' ' + (props.init.removeDelays ? 'remove-delay' : '')}>{props.content.subHeadingA + ' '}<br className="mobile-only" />{props.content.subHeadingB}</p>
                <div className={"skills " + (props.init.loadMainContent ? 'show' : '') + ' ' + (props.init.removeDelays ? 'remove-delay' : '')}>
                        <Skills content={props.content} />
                    </div>
                </div>
            </div>
        </section>
    )
   

export default TopPanel

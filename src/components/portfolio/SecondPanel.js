import React from "react";
import Projects from "./Projects";

const SecondPanel = props => (
  <section
    className="second-panel sliding-panel fade-out"
    onWheel={props.onWheel}
    onTouchStart={props.onTouchStart}
    onTouchMove={props.onTouchMove}
    onTouchEnd={props.onTouchEnd}
  >
    <div className="panel-wrapper">
      <div className="inner-wrap projects-list">
        <h2 className="category-title">{props.content.projectsTitle}</h2>
        <Projects content={props.content} />
      </div>
    </div>
  </section>
);

export default SecondPanel;

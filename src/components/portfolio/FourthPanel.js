import React from "react";
import About from "./About";

const FourthPanel = props => (
  <section
    className="fourth-panel sliding-panel fade-out"
    onWheel={props.onWheel}
    onTouchStart={props.onTouchStart}
    onTouchMove={props.onTouchMove}
    onTouchEnd={props.onTouchEnd}
  >
    <div className="panel-wrapper">
      <div className="inner-wrap snippets">
        <h2 className="category-title">{props.content.aboutTitle}</h2>
        <About content={props.content} />
      </div>
    </div>
  </section>
);

export default FourthPanel;

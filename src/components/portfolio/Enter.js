import React from "react";
import { Fingers } from "../../assets/svgs";

const Enter = props => (
  <div>
    <p
      className={
        "enter " +
        (props.init.loadMainContent ? "load-icon" : "") +
        " " +
        (props.init.removeDelays ? "remove-delay" : "")
      }
    >
      <span className="text">
        <span className="mobile-only">SWIPE&nbsp;</span>
        <span className="desktop-only">SCROLL&nbsp;</span>UP / DOWN
      </span>
      <br />
      <Fingers />
    </p>
    <div className="hide">
      Two Finger Swipe Down by Jeff Portaro from the Noun Project
    </div>
  </div>
);

export default Enter;

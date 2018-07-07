import React, { Component } from "react";
import data from "./data/data.json";
import { Fingers } from "./assets/svgs";
import VertNav from "./components/portfolio/VertNav";
import Portfolio from "./components/portfolio/Portfolio";
import { connect } from "react-redux";
import { setLoadMainContent, setRemoveDelays } from "./actions/initActions";
import { setIsWheel, setMovingPanel } from "./actions/wheelActions";

class App extends Component {
  state = {
    content: data
  };

  closeModal() {
    document.querySelector(".modal-window").classList.remove("show");

    setTimeout(() => {
      document.querySelector(".modal-overlay").classList.remove("show");
    }, 100);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoadMainContent(true);
    }, 800);

    setTimeout(() => {
      this.props.setRemoveDelays(true);
    }, 5000);
  }

  render() {
    return (
      <div>
        <div id="portrait-only">
          <h2>PLEASE ROTATE YOUR PHONE BACK, PORTRAIT ONLY!</h2>
        </div>
        <div className="container">
          <div className="panel">
            <VertNav {...this.props} />
            <Portfolio content={this.state.content} {...this.props} />
          </div>
          <div className="bg-image load-image" />
          <p
            className={
              "enter " +
              (this.props.init.loadMainContent ? "load-icon" : "") +
              " " +
              (this.props.init.removeDelays ? "remove-delay" : "")
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
          <div className="modal-overlay" onClick={this.closeModal} />
          <div className="modal-window">
            <div className="modal-inner">
              <div className="modal-display-data" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  init: state.init,
  wheel: state.wheel
});

const mapActionsToProps = {
  setLoadMainContent: setLoadMainContent,
  setRemoveDelays: setRemoveDelays,
  setIsWheel: setIsWheel,
  setMovingPanel: setMovingPanel
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

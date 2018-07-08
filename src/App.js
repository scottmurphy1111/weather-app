import React, { Component } from "react";
import data from "./data/data.json";
import PortraitOnly from "./components/portfolio/PortraitOnly";
import VertNav from "./components/portfolio/VertNav";
import Portfolio from "./components/portfolio/Portfolio";
import { connect } from "react-redux";
import { setLoadMainContent, setRemoveDelays } from "./actions/initActions";
import { setIsWheel, setMovingPanel } from "./actions/wheelActions";
import BgImage from "./components/portfolio/BgImage";
import Enter from "./components/portfolio/Enter";
import Modal from "./components/portfolio/Modal";

class App extends Component {
  state = {
    content: data
  };

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
        <PortraitOnly />
        <div className="container">
          <div className="panel">
            <VertNav {...this.props} />
            <Portfolio content={this.state.content} {...this.props} />
          </div>
          <BgImage />
					<Enter {...this.props} />          
          <Modal />
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

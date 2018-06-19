import React, { Component } from 'react';
import data from './data/data.json';
import VertNav from './components/portfolio/VertNav';
import Portfolio from './components/portfolio/Portfolio';
import { connect } from 'react-redux';
import { setLoadMainContent, setRemoveDelays, setIsWheel, setMovingPanel } from './actions/initActions';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			content: data
		}
	}

	closeModal() {
		document.querySelector('.modal-window').classList.remove('show');
		
		setTimeout(() => {
			document.querySelector('.modal-overlay').classList.remove('show');
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
				<div id="portrait-only"><h2>PLEASE ROTATE YOUR PHONE BACK, PORTRAIT ONLY!</h2></div>
				<div className="container">
					<div className="panel">
						<VertNav {...this.props} />
						<Portfolio content={this.state.content} {...this.props} />
					</div>
					<div className="bg-image load-image"></div>
					<p className={"enter " + (this.props.init.loadMainContent ? 'load-icon' : '') + ' ' + (this.props.init.removeDelays ? 'remove-delay' : '')}>
						<span className="text" ><span className="mobile-only">SWIPE&nbsp;</span><span className="desktop-only">SCROLL&nbsp;</span>UP / DOWN</span><br />
						<span className="icon">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							viewBox="0 0 69 50">
						<path fill="#ffffff" className="fingers" d="M64.2,25.5c-2.5-2.6-14-6.8-14.5-7c-0.3-0.1-0.6-0.2-1-0.2c-1.3,0-2.6,0.9-3.1,2.2c-0.1,0.3-0.2,0.8-0.2,1.2
							c-0.3-0.1-0.6-0.1-1-0.1c-1.5,0-2.9,1-3.4,2.4c-0.3,0.7-0.3,1.4-0.1,2.2l-13.1-4.8c-0.5-0.2-0.9-0.3-1.4-0.3c-1.5,0-2.7,0.9-3.2,2.2
							c-0.7,1.9,0.3,3.8,2.2,4.5l1,0.4c-1.2,0.3-2.1,1.1-2.5,2.2c-0.4,1-0.3,2,0.2,2.9c0.5,0.8,1.2,1.5,2.2,1.8l15.6,5.3
							c0.1,0.5,0.2,1.2,0.7,2.2c1.1,2.7,5,5.4,9.7,5.4c0.9,0,1.9-0.1,2.7-0.3c6.2-1.5,9.7-4.6,11.8-10.4C69.1,31.3,66.7,28.3,64.2,25.5z
							M65.4,37c-1.9,5.3-5,8-10.7,9.4c-0.8,0.2-1.6,0.3-2.4,0.3c-4,0-7.4-2.3-8.3-4.5c-0.2-0.4-0.3-0.8-0.4-1l5.1,1.7l0,0
							c0.4,0.1,0.8-0.1,1-0.5c0.1-0.4-0.1-0.8-0.5-1l-22.4-7.6c-0.6-0.2-1.1-0.6-1.4-1.1s-0.3-1.1-0.1-1.6c0.4-1.1,1.6-1.6,2.9-1.1
							l13.7,4.4c0.4,0.1,0.8-0.1,1-0.5c0.1-0.4-0.1-0.8-0.4-1l-16.6-6.5c-1.1-0.4-1.6-1.5-1.3-2.6c0.3-0.8,0.9-1.2,1.8-1.2
							c0.3,0,0.5,0,0.8,0.1l16,5.8l0,0c0.4,0.1,0.8-0.1,1-0.5c0.1-0.4-0.1-0.8-0.5-1c-0.5-0.2-0.9-0.6-1.2-1.1c-0.2-0.5-0.3-1.1-0.1-1.6
							c0.3-0.8,1.1-1.4,1.9-1.4c0.2,0,0.5,0,0.7,0.1l3.1,1.1c0.4,0.1,0.8-0.1,1-0.5c0.1-0.4-0.1-0.8-0.5-1l-1.9-0.7c0-0.3,0-0.9,0.1-1.3
							c0.3-0.8,1.3-1.4,2-1.1c3.3,1.2,12.1,4.7,13.9,6.6C65.5,29.2,67.3,31.7,65.4,37z"/>
						<path fill="#5AD6FF" d="M9.2,41c-0.8,0.1-1.7,0.4-2.5,0.6C3.8,29,4.2,15.7,8,3.2c0.4-0.7-0.1-1.7-0.7-2c-0.7-0.1-1.7,0.4-2,1.1
							C1.4,15.4,1,29.1,3.9,42.3c-1.1,0.3-2.1,0.4-3.2,0.7C0.4,43.1,0,43.2,0,43.8c0,0.6,0.1,0.8,0.6,1.1C2.4,46,4.2,47.4,6,48.3
							c0.6,0.3,1.3,0.1,1.4-0.4c0.8-2,1.8-3.8,2.9-5.6c0.3-0.4,0.3-0.7,0-1C10.1,41,9.7,41,9.2,41z"/>
						</svg>
						</span>
					</p>
					<div className="hide">Two Finger Swipe Down by Jeff Portaro from the Noun Project</div>
					<div className="modal-overlay" onClick={this.closeModal}></div>
					<div className="modal-window">
						<div className="modal-inner">
							<div className="modal-display-data"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	init: state.init
});

const mapActionsToProps = {
	setLoadMainContent: setLoadMainContent,
	setRemoveDelays: setRemoveDelays,
	setIsWheel: setIsWheel,
	setMovingPanel: setMovingPanel
};
  
export default connect(mapStateToProps, mapActionsToProps)(App);

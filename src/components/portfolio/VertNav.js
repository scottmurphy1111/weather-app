import React, { Component } from 'react';


class VertNav extends Component {
    handleClick(e) {
        e.stopPropagation();

        let clickedLiVal = e.target.dataset.active,
        currentActiveLi = document.querySelector('.vert-nav li.active'),
        allPanels = document.querySelectorAll('.sliding-panel'),
        activatePanel = '',
        enterBtn = document.querySelector('.enter');

        activatePanel = document.querySelector('.' + clickedLiVal);

        //loop through nav li's
        for(let i = 0; i < allPanels.length; i++) {
            allPanels[i].classList.add('fade-out');
            allPanels[i].classList.remove('fade-in');              
        }
        
        //update active li
        currentActiveLi.classList.remove('active');
        e.target.classList.add('active');

        //show/hide clicked section
        activatePanel.classList.add('fade-in');
        activatePanel.classList.remove('fade-out');
        
        //swipe icon hide/show
        if(clickedLiVal === 'top-panel') {
            enterBtn.classList.add('load-icon-instantly');
        } else {
            enterBtn.classList.remove('load-icon', 'load-icon-instantly');
        }

    }

    render() {
        return (
            <div className={"vert-nav " + (this.props.loadMainContent ? 'show' : '')}>
                <ul>
                    <li className="active panel1" data-active="top-panel" onClick={this.handleClick}></li>
                    <li className="panel2" data-active="second-panel" onClick={this.handleClick}></li>
                    <li className="panel3" data-active="third-panel" onClick={this.handleClick}></li>
                    <li className="panel4" data-active="fourth-panel" onClick={this.handleClick}></li>
                    <li className="panel5" data-active="fifth-panel" onClick={this.handleClick}></li>
                </ul>
            </div>
        )
    }
}

export default VertNav;

import React, { Component } from 'react';
import TopPanel from './TopPanel';
import SecondPanel from './SecondPanel';
import ThirdPanel from './ThirdPanel';
import FourthPanel from './FourthPanel';
import FifthPanel from './FifthPanel';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.onWheel = this.onWheel.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.setIsWheel = this.setIsWheel.bind(this);
        this.setMovingPanel = this.setMovingPanel.bind(this);
    }

    setIsWheel(val) {
		this.props.setIsWheel(val);
    }
    
    setMovingPanel(val) {
        this.props.setMovingPanel(val);
    }
    
    onWheel = (e) => {
        let enterBtn = document.querySelector('.enter'),
        element = e.currentTarget,
        nextPanel = element.nextElementSibling,
        prevPanel = element.previousElementSibling,
        currentNav = document.querySelector('.vert-nav li.active'),                
        nextNav = document.querySelector('.vert-nav li.active').nextElementSibling,
        prevNav = document.querySelector('.vert-nav li.active').previousElementSibling,
        movement = 0; 
    
        //measure mousewheel/swipe distance
        movement = e.deltaY;
    
        //firefox needs a little help to get correct distance
        if(e.deltaMode === 1) {
            movement = movement * 8;
        }
                        
        //swap panels down     
        if(movement > 100 && nextNav) {
                            
            //won't animate until false
            if(this.props.init.isWheel) {
                return;
            } 
            
            //allow animation
            this.props.setIsWheel(true);

            //mousewheel/swipe down
            let movePanelDown = () => {

                //hide swipe icon
                if(element.className.indexOf('top-panel') > -1) {
                    enterBtn.classList.remove('load-icon', 'load-icon-instantly');
                }

                //show next panel/hide current panel
                element.classList.remove('load-content', 'fade-in')
                element.classList.add('fade-out');
                nextPanel.classList.add('fade-in')
                nextPanel.classList.remove('fade-out');  

                finishMovingDown();
            };

            //callback to prevent rapid animation
            let finishMovingDown = () => {
                if(this.props.init.movingPanel) {
                    return;
                } else {
                    this.props.setMovingPanel(true);
                    nextNav.classList.add('active');
                    currentNav.classList.remove('active');
                    
                    setTimeout(() => {
                        this.props.setIsWheel(false);
                        this.props.setMovingPanel(false);
                    }, 600);
                }
            };

            movePanelDown();
        }

        //swap panels up
        if(movement < -100 && prevNav) {
            if(this.props.init.isWheel) {  
                return;
            } 
            
            this.props.setIsWheel(true);
            
            let movePanelUp = () => {
                if(element.className.indexOf('second-panel') > -1) {
                    enterBtn.classList.add('load-icon-instantly');
                }

                element.classList.remove('load-content',  'fade-in')
                element.classList.add('fade-out');  
                prevPanel.classList.add('fade-in');
                prevPanel.classList.remove('fade-out');
                
                finishMovingUp();
            };

            let finishMovingUp = () => {
                if(this.props.init.movingPanel) {
                    return;
                } else {
                    this.props.setMovingPanel(true);
                    prevNav.classList.add('active');
                    currentNav.classList.remove('active');
                    
                    setTimeout(() => {
                        this.props.setIsWheel(false);
                        this.props.setMovingPanel(false);
                    },600);
                }
            };

            movePanelUp();
        }
    }

    //mobile swiping swap panels
    startX = 0;
    startY = 0;
    dist = 0;
    startTime = 0;
    
    //inital touch
    onTouchStart = (e) => {
        let touchobj = e.changedTouches[0];

        this.dist = 0;
        this.startX = touchobj.pageX;
        this.startY = touchobj.pageY;
        this.startTime = Date.now();    
    };

    //prevent swipe end
    onTouchMove = (e) => {
        e.preventDefault();
    };

    //measure touch distance
    onTouchEnd = (e) => {
        let touchobj = e.changedTouches[0],
        enterBtn = document.querySelector('.enter'),
        element = e.currentTarget,
        nextPanel = element.nextElementSibling,
        prevPanel = element.previousElementSibling,
        currentNav = document.querySelector('.vert-nav li.active'),
        nextNav = document.querySelector('.vert-nav li.active').nextElementSibling,
        prevNav = document.querySelector('.vert-nav li.active').previousElementSibling;

        this.dist = touchobj.pageY - this.startY;

        //show/hide panel up
        if(this.dist < -100 && nextNav) {
            if(this.props.init.isWheel) {  
                return;
            } 
        
            this.props.setIsWheel(true);

            let movePanelDown = () => {
                if(element.className.indexOf('top-panel') > -1) {
                    enterBtn.classList.remove('load-icon', 'load-icon-instantly');
                }

                element.classList.remove('load-content', 'fade-in')
                element.classList.add('fade-out');
                nextPanel.classList.add('fade-in')
                nextPanel.classList.remove('fade-out');  

                finishMovingDown();
            };

            let finishMovingDown = () => {
                if(this.props.init.movingPanel) {
                    return;
                } else {
                    nextNav.classList.add('active');
                    currentNav.classList.remove('active');
                    
                    setTimeout(() => {
                        this.props.setIsWheel(false);
                        this.props.setMovingPanel(false);
                    },600);
                }
            };

            movePanelDown();
        }

        //show/hide panel down
        if(this.dist > 100 && prevNav) {
            if(this.props.init.isWheel) {  
                return;
            } 
            
            this.props.setIsWheel(true);
            
            let movePanelUp = () => {
                if(element.className.indexOf('second-panel') > -1) {
                    enterBtn.classList.add('load-icon-instantly');
                }

                element.classList.remove('load-content', 'fade-in')
                element.classList.add('fade-out');  
                prevPanel.classList.add('fade-in');
                prevPanel.classList.remove('fade-out');
                
                finishMovingUp();
            };

            let finishMovingUp = () => {
                if(this.props.init.movingPanel) {
                    return;
                } else {
                    prevNav.classList.add('active');
                    currentNav.classList.remove('active');
                    
                    setTimeout(() => {
                        this.props.setIsWheel(false);
                        this.props.setMovingPanel(false);
                    },600);
                }
            };

            movePanelUp();
        }
    }

    render() {
        const content = this.props.content;
        return (
            <div>
                <TopPanel 
                    content={content} 
                    onWheel={e => this.onWheel(e)} 
                    onTouchStart={e => this.onTouchStart(e)}
                    onTouchMove={e => this.onTouchMove(e)}
                    onTouchEnd={e => this.onTouchEnd(e)}
                    {...this.props} />
                <SecondPanel 
                    content={content} 
                    onWheel={e => this.onWheel(e)} 
                    onTouchStart={e => this.onTouchStart(e)}
                    onTouchMove={e => this.onTouchMove(e)}
                    onTouchEnd={e => this.onTouchEnd(e)} />
                <ThirdPanel 
                    content={content} 
                    onWheel={e => this.onWheel(e)} 
                    onTouchStart={e => this.onTouchStart(e)}
                    onTouchMove={e => this.onTouchMove(e)}
                    onTouchEnd={e => this.onTouchEnd(e)} />
                <FourthPanel 
                    content={content} 
                    onWheel={e => this.onWheel(e)} 
                    onTouchStart={e => this.onTouchStart(e)}
                    onTouchMove={e => this.onTouchMove(e)}
                    onTouchEnd={e => this.onTouchEnd(e)} />
                <FifthPanel 
                    content={content} 
                    onWheel={e => this.onWheel(e)} 
                    onTouchStart={e => this.onTouchStart(e)}
                    onTouchMove={e => this.onTouchMove(e)}
                    onTouchEnd={e => this.onTouchEnd(e)} />
            </div>
        );
    }
};

export default Portfolio;
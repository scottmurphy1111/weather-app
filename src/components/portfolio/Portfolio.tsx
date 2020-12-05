import React, { useEffect, useState } from 'react';
import TopPanel from './TopPanel';
import SecondPanel from './SecondPanel';
import ThirdPanel from './ThirdPanel';
import FourthPanel from './FourthPanel';
import FifthPanel from './FifthPanel';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// const getPanelOffset = ((panel: any) => {
//   const panelOffset = document.querySelector(panel).getBoundingClientRect().height - 350;
//   return panelOffset;
// });



export default function Portfolio() {
  const [topPanelOffset, setTopPanelOffset] = useState(0);
  const [secondPanelOffset, setSecondPanelOffset] = useState(0);
  const [thirdPanelOffset, setThirdPanelOffset] = useState(0);
  const [fourthPanelOffset, setFourthPanelOffset] = useState(0);
  const [fifthPanelOffset, setFifthPanelOffset] = useState(0);

  const getCurrentOffset = (pageOffset: any) => {
    console.log('offset', pageOffset, 
    'top', topPanelOffset,
    'sec', secondPanelOffset,
    'thi', thirdPanelOffset,
    'fou', fourthPanelOffset,
    'fif', fifthPanelOffset);
    if (topPanelOffset < pageOffset && secondPanelOffset > pageOffset) {
      bgOverlay$.value.style.backgroundColor = 'rgba(25, 128, 229, 1';
    } else if (secondPanelOffset < pageOffset && thirdPanelOffset > pageOffset) {
      bgOverlay$.value.style.backgroundColor = 'rgba(229, 128, 25, 1';
    } else if (thirdPanelOffset < pageOffset && fourthPanelOffset > pageOffset) {
      bgOverlay$.value.style.backgroundColor = 'rgba(128, 25, 229, 1';
    } else if (fourthPanelOffset < pageOffset && fifthPanelOffset > pageOffset) {
      bgOverlay$.value.style.backgroundColor = 'rgba(25, 229, 128, 1';
    } else {
      bgOverlay$.value.style.backgroundColor = 'rgba(229, 25, 128, 1';
    }
  };

  const bgOverlay$ = new BehaviorSubject<any>(null);
  
  const monitorScrolling$ = () => fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    tap(value => {
      console.log('value', value);
      bgOverlay$.next(document.querySelector('.bg-overlay'));
      // getCurrentOffset(value);
      //value ? bgOverlay$.value.style.backgroundColor = 'rgba(5,159,134,0.05)' : bgOverlay$.value.style.backgroundColor = 'rgba(34,163,244,0.05)';
    })
  );

  useEffect(() => {
   const subscription = monitorScrolling$().subscribe(subVal => console.log('subVal', subVal));
   const bgOverlay = document.querySelector('.bg-overlay');
   console.log('spo', secondPanelOffset);
   return () => subscription.unsubscribe();
  })

  const old = () => {
  // constructor(props) {
  //   super(props);

  //   this.onWheel = this.onWheel.bind(this);
  //   this.onTouchStart = this.onTouchStart.bind(this);
  //   this.onTouchMove = this.onTouchMove.bind(this);
  //   this.onTouchEnd = this.onTouchEnd.bind(this);
  //   this.setIsWheel = this.setIsWheel.bind(this);
  //   this.setMovingPanel = this.setMovingPanel.bind(this);
  // }

  // setIsWheel(val) {
  //   this.props.setIsWheel(val);
  // }

  // setMovingPanel(val) {
  //   this.props.setMovingPanel(val);
  // }

  // onWheel = e => {
  //   if (this.props.init.removeDelays) {
  //     const enterBtn = document.querySelector('.enter');
  //     const element = e.currentTarget;
  //     const nextPanel = element.nextElementSibling;
  //     const prevPanel = element.previousElementSibling;
  //     const currentNav = document.querySelector('.vert-nav .nav-item.active');
  //     const nextNav = document.querySelector('.vert-nav .nav-item.active').nextElementSibling;
  //     console.log('next ', nextNav);
  //     const prevNav = document.querySelector('.vert-nav .nav-item.active').previousElementSibling;
  //     let movement = 0;

  //     //measure mousewheel/swipe distance
  //     movement = e.deltaY;

  //     //firefox needs a little help to get correct distance
  //     if (e.deltaMode === 1) {
  //       movement = movement * 12;
  //     }

  //     //swap panels down
  //     if (movement > 100 && nextNav) {
  //       if (this.props.wheel.isWheel) {
  //         return false;
  //       } else {
  //         this.props.setIsWheel(true);
  //       }

  //       //mousewheel/swipe down
  //       let movePanelDown = () => {
  //         //hide swipe icon
  //         if (element.className.indexOf('top-panel') > -1) {
  //           enterBtn.classList.remove('load-icon', 'load-icon-instantly');
  //         }

  //         //show next panel/hide current panel
  //         element.classList.remove('load-content', 'fade-in');
  //         element.classList.add('fade-out');
  //         nextPanel.classList.add('fade-in');
  //         nextPanel.classList.remove('fade-out');

  //         finishMovingDown();
  //       };

  //       //callback to prevent rapid animation
  //       let finishMovingDown = () => {
  //         if (this.props.wheel.movingPanel) {
  //           return false;
  //         } else {
  //           this.props.setMovingPanel(true);
  //           nextNav.classList.add('active');
  //           currentNav.classList.remove('active');

  //           setTimeout(() => {
  //             this.props.setIsWheel(false);
  //             this.props.setMovingPanel(false);
  //           }, 1000);
  //         }
  //       };

  //       movePanelDown();
  //     }

  //     //swap panels up
  //     if (movement < -100 && prevNav) {
  //       if (this.props.wheel.isWheel) {
  //         return false;
  //       } else {
  //         this.props.setIsWheel(true);
  //       }

  //       let movePanelUp = () => {
  //         if (element.className.indexOf('second-panel') > -1) {
  //           enterBtn.classList.add('load-icon-instantly');
  //         }

  //         element.classList.remove('load-content', 'fade-in');
  //         element.classList.add('fade-out');
  //         prevPanel.classList.add('fade-in');
  //         prevPanel.classList.remove('fade-out');

  //         finishMovingUp();
  //       };

  //       let finishMovingUp = () => {
  //         if (this.props.wheel.movingPanel) {
  //           return false;
  //         } else {
  //           this.props.setMovingPanel(true);
  //           prevNav.classList.add('active');
  //           currentNav.classList.remove('active');

  //           setTimeout(() => {
  //             this.props.setIsWheel(false);
  //             this.props.setMovingPanel(false);
  //           }, 1000);
  //         }
  //       };

  //       movePanelUp();
  //     }
  //   }
  // };

  // //mobile swiping swap panels
  // startX = 0;
  // startY = 0;
  // dist = 0;
  // startTime = 0;

  // //inital touch
  // onTouchStart = e => {
  //   if (this.props.init.removeDelays) {
  //     let touchobj = e.changedTouches[0];

  //     this.dist = 0;
  //     this.startX = touchobj.pageX;
  //     this.startY = touchobj.pageY;
  //     this.startTime = Date.now();
  //   }
  // };

  // //prevent swipe end
  // onTouchMove = e => {
  //   e.preventDefault();
  // };

  // //measure touch distance
  // onTouchEnd = e => {
  //   if (this.props.init.removeDelays) {
  //     const touchobj = e.changedTouches[0];
  //     const enterBtn = document.querySelector('.enter');
  //     const element = e.currentTarget;
  //     const nextPanel = element.nextElementSibling;
  //     const prevPanel = element.previousElementSibling;
  //     const currentNav = document.querySelector('.vert-nav .nav-item.active');
  //     const nextNav = document.querySelector('.vert-nav .nav-item.active').nextElementSibling;
  //     const prevNav = document.querySelector('.vert-nav .nav-item.active').previousElementSibling;

  //     this.dist = touchobj.pageY - this.startY;

  //     //show/hide panel up
  //     if (this.dist < -100 && nextNav) {
  //       if (this.props.wheel.isWheel) {
  //         return false;
  //       } else {
  //         this.props.setIsWheel(true);
  //       }

  //       let movePanelDown = () => {
  //         if (element.className.indexOf('top-panel') > -1) {
  //           enterBtn.classList.remove('load-icon', 'load-icon-instantly');
  //         }

  //         element.classList.remove('load-content', 'fade-in');
  //         element.classList.add('fade-out');
  //         nextPanel.classList.add('fade-in');
  //         nextPanel.classList.remove('fade-out');

  //         finishMovingDown();
  //       };

  //       let finishMovingDown = () => {
  //         if (this.props.wheel.movingPanel) {
  //           return false;
  //         } else {
  //           nextNav.classList.add('active');
  //           currentNav.classList.remove('active');

  //           setTimeout(() => {
  //             this.props.setIsWheel(false);
  //             this.props.setMovingPanel(false);
  //           }, 1000);
  //         }
  //       };

  //       movePanelDown();
  //     }

  //     //show/hide panel down
  //     if (this.dist > 100 && prevNav) {
  //       if (this.props.wheel.isWheel) {
  //         return false;
  //       } else {
  //         this.props.setIsWheel(true);
  //       }

  //       let movePanelUp = () => {
  //         if (element.className.indexOf('second-panel') > -1) {
  //           enterBtn.classList.add('load-icon-instantly');
  //         }

  //         element.classList.remove('load-content', 'fade-in');
  //         element.classList.add('fade-out');
  //         prevPanel.classList.add('fade-in');
  //         prevPanel.classList.remove('fade-out');

  //         finishMovingUp();
  //       };

  //       let finishMovingUp = () => {
  //         if (this.props.wheel.movingPanel) {
  //           return false;
  //         } else {
  //           prevNav.classList.add('active');
  //           currentNav.classList.remove('active');

  //           setTimeout(() => {
  //             this.props.setIsWheel(false);
  //             this.props.setMovingPanel(false);
  //           }, 1000);
  //         }
  //       };

  //       movePanelUp();
  //     }
  //   }
  // };

  // render() {
  //   const content = this.props.content;
  }
  return (
    <>
      <TopPanel
        setTopPanelOffset={setTopPanelOffset}
      // content={content}
      // onWheel={e => this.onWheel(e)}
      // onTouchStart={e => this.onTouchStart(e)}
      // onTouchMove={e => this.onTouchMove(e)}
      // onTouchEnd={e => this.onTouchEnd(e)}
      // {...this.props}
      />
      <SecondPanel
        setSecondPanelOffset={setSecondPanelOffset}
      // content={content}
      // onWheel={e => this.onWheel(e)}
      // onTouchStart={e => this.onTouchStart(e)}
      // onTouchMove={e => this.onTouchMove(e)}
      // onTouchEnd={e => this.onTouchEnd(e)}
      />
      <ThirdPanel
        setThirdPanelOffset={setThirdPanelOffset}
      // content={content}
      // onWheel={e => this.onWheel(e)}
      // onTouchStart={e => this.onTouchStart(e)}
      // onTouchMove={e => this.onTouchMove(e)}
      // onTouchEnd={e => this.onTouchEnd(e)}
      />
      <FourthPanel
        setFourthPanelOffset={setFourthPanelOffset}
      // content={content}
      // onWheel={e => this.onWheel(e)}
      // onTouchStart={e => this.onTouchStart(e)}
      // onTouchMove={e => this.onTouchMove(e)}
      // onTouchEnd={e => this.onTouchEnd(e)}
      />
      <FifthPanel
        setFifthPanelOffset={setFifthPanelOffset}
      // content={content}
      // onWheel={e => this.onWheel(e)}
      // onTouchStart={e => this.onTouchStart(e)}
      // onTouchMove={e => this.onTouchMove(e)}
      // onTouchEnd={e => this.onTouchEnd(e)}
      />
    </>
  );
}
// }

// export default Portfolio;

import React from 'react';
import { Logo } from '../../assets/svgs';
// import { AppContext } from '../../App'
//import data from '../../data/data.json';


export default function VertNav() {
  // const { topPanel } = useContext<any>(AppContext);
  // console.log('content', topPanel);
  // const {name, position} = topPanel;

  const handleClick = ((e: any) => {
    // e.stopImmediatePropagation();
    console.log('clicked', );

    const selectedNav = e.target.dataset.nav;
    console.log('selectedNav', selectedNav);

    const section: HTMLElement | null = document.querySelector(`[data-section=${selectedNav}`);
    const scrollPosition = section?.offsetTop;

    window.scrollTo({top:scrollPosition, behavior: 'smooth'});


    // let clickedLiVal = e.target.dataset.active;
    // let activatePanel = '';

    // const currentActiveLi = document.querySelector('.vert-nav .nav-item.active');
    // const allPanels = document.querySelectorAll('.sliding-panel');
    // const enterBtn = document.querySelector('.enter');

    // activatePanel = document.querySelector('.' + clickedLiVal);

    // //loop through nav li's
    // allPanels.forEach(nav => {
    //   nav.classList.add('fade-out');
    //   nav.classList.remove('fade-in');
    // });

    // //update active li
    // currentActiveLi.classList.remove('active');
    // e.target.classList.add('active');

    // //show/hide clicked section
    // activatePanel.classList.add('fade-in');
    // activatePanel.classList.remove('fade-out');

    // //swipe icon hide/show
    // if (clickedLiVal === 'top-panel') {
    //   enterBtn.classList.add('load-icon-instantly');
    // } else {
    //   enterBtn.classList.remove('load-icon', 'load-icon-instantly');
    // }
  })

  // handleMouseOver = () => {
  //   const navWrapper = document.querySelector('.vert-nav-wrapper');
  //   const currentActiveLi = document.querySelector('.vert-nav .nav-item.active');
  //   const flyOut = document.createElement('div');
  //   flyOut.classList.add('fly-out');
  //   flyOut.innerHTML = '<span>flyOut</span>';
  //   console.log('act', currentActiveLi);
  //   navWrapper.insertBefore(flyOut, currentActiveLi);
  // }

  // render() {
  return (
    // <div
    //   className={
    //     'vert-nav ' + (this.props.init.loadMainContent ? 'show' : '')
    //   }
    // >
    <div className='vert-nav show'>
      <div className='wrap container-fluid'>
        <div className="row">
          <div className='col-xs-3'>
            <span className='logo' data-nav='home' onClick={handleClick}>
              <Logo />
            </span>
          </div>
          <ul className='col-xs-5 col-xs-offset-4'>
            <li data-nav='projects' onClick={handleClick}>Projects</li>
            <li data-nav='skills' onClick={handleClick}>Skills</li>
            <li data-nav='about' onClick={handleClick}>About</li>
            <li data-nav='contact' onClick={handleClick}>Contact</li>
          </ul>
        </div>
      </div>
      {/* <div className="vert-nav-wrapper">
          
          <div
            className='nav-item active panel1'
            data-active='top-panel'
            onClick={handleClick}
            // onMouseOver={this.handleMouseOver}
          ></div>
          <div className="fly-out">
            flyOut
          </div>
          <div
            className='nav-item panel2'
            data-active='second-panel'
            onClick={handleClick}
            // onMouseOver={this.handleMouseOver}
          ></div>
          <div
            className='nav-item panel3'
            data-active='third-panel'
            onClick={handleClick}
            // onMouseOver={this.handleMouseOver}
          ></div>
          <div
            className='nav-item panel4'
            data-active='fourth-panel'
            onClick={handleClick}
            // onMouseOver={this.handleMouseOver}
          ></div>
          <div
            className='nav-item panel5'
            data-active='fifth-panel'
            onClick={handleClick}
            // onMouseOver={this.handleMouseOver}
          ></div>
        </div> */}
    </div>
  );
  // }
}

// export default VertNav;

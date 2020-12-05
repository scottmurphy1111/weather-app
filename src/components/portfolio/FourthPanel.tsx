import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
// import About from './About';
import { getPanelOffset } from './getPanelOffset';

const FourthPanel = (params: any) => {
  const { fourthPanel } = useContext<any>(AppContext);
  const { title, about } = fourthPanel;

  const appendExperience = () => {
    const expBio = document.querySelectorAll('.about li .about-description')[3];
    let calcDate = new Date().getFullYear() - 2009;

    expBio.innerHTML = '<p>I have been coding for ' + calcDate + ' years+</p>';
  }

  const revealContent = ((e: any) => {
    let description = e.target.querySelector('.about-description');
    console.log('des', e.target.querySelector('.about-description'));
    let allShownContent = document.querySelectorAll('.fourth-panel .about li .about-description.show');

    const hideAllShownContent = () => {
      allShownContent.forEach((item: any) => {
        item.classList.remove('show');
        item.style.height = '0px';
      });

    }

    if (description.classList.contains('show')) {
      hideAllShownContent();
    } else {
      hideAllShownContent();
      description.classList.add('show');

      let content = document.querySelector('.fourth-panel .about-description.show p');

      let contentText: string = '';
      if (content !== null) {
        contentText = content.textContent || '';
        let current = 0;
        let height = content.clientHeight;

        (description as HTMLElement).style.height = height + 'px';
        content.innerHTML = '';

        setInterval(() => {
          if (current < contentText.length && content !== null) {
            content.innerHTML += contentText[current++];
          }
        }, 15);
      }
    }
  });

  useEffect(() => {
    params.setFourthPanelOffset(getPanelOffset('.fourth-panel'));
    appendExperience();
  })

  return (
    <section
      className='fourth-panel sliding-panel wrap container-fluid'
      data-section='about'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <h2 className='category-title'>{title}</h2>
            <ul className='about'>
              {about.map((item: any, id: number) => {
                return (
                  <li key={id + 1} onClick={revealContent}>
                    <div className="about-link" >
                      <img src={`${process.env.PUBLIC_URL}${item.icon}`} alt={`${item.heading} image`} />
                      <h3>{item.heading}</h3>
                    </div>
                    <div className="about-description">
                      <p>{item.description}</p>
                    </div>
                  </li>)
              }
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthPanel;
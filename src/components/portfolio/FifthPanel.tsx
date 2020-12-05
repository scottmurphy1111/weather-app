import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';
// import Socials from './Socials';

const FifthPanel = (params: any) => {
  const { fifthPanel } = useContext<any>(AppContext);
  const { title, contactTitle, socialTitle, contact } = fifthPanel;

  const loadContact = () => {
    const phone = '804-836-2326';
    const phoneDiv = document.querySelector('.insert-phone');
    const user = 'scottmurphy1111';
    const domain = 'gmail.com';
    const emailDiv = document.querySelector('.insert-email');

    phoneDiv!.innerHTML = `<a href="tel:${phone}">${phone}</a>`;
    emailDiv!.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
  }

  useEffect(() => {
    loadContact();
  });

  useEffect(() => {
    params.setFifthPanelOffset(getPanelOffset('.fifth-panel'))
  })

  return (


    // componentDidMount() {
    //   this.loadContact();
    // }

    <section
      className='fifth-panel sliding-panel wrap container-fluid'
      data-section='contact'
    >
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel-wrapper'>
            <div className='special-note'>
              <h2 className='category-title'>{title}</h2>
              <p>{contact.specialNote}</p>
            </div>
            <div className='block'>
              <h2 className='category-title'>
                {contactTitle}
              </h2>
              <div className='contact'>
                <ul>
                  <li className='insert-phone' />
                  <li className='insert-email' />
                </ul>
              </div>
            </div>
            <div className='block'>
              <h2 className='category-title'>
                {socialTitle}
              </h2>
              <div className='social'>
                {/* <Socials content={this.props.content} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthPanel;
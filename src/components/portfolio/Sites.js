import React, { Component } from 'react';

class Sites extends Component {
  getModal = modal => {
    let link = '';
    document.querySelector('.modal-overlay').classList.add('show');
    setTimeout(() => {
      document.querySelector('.modal-window').classList.add('show');
    }, 200);

    if (modal === 'Personal Loans') {
      link = `${process.env.PUBLIC_URL}/assets/modal-templates/personal-loans.html`;
      appendModal(link);
    }

    if (modal === 'Creditwise') {
      link = `${process.env.PUBLIC_URL}/assets/modal-templates/creditwise.html`;
      appendModal(link);
    }

    if (modal === 'Income Calculator') {
      link = `${process.env.PUBLIC_URL}/assets/modal-templates/income-calc.html`;
      appendModal(link);
    }

    function appendModal(template, e) {
      (e || window.event).preventDefault();
      let modalDisplay = document.querySelector('.modal-display-data'),
        xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          modalDisplay.innerHTML = xhr.responseText;
        }
      };

      xhr.open('GET', template, true);
      xhr.setRequestHeader('Content-type', 'text/html');
      xhr.send();
    }
  };

  render() {
    const sites = this.props.sites.map((site, index) => (
      <li key={index}>
        <a
          className='proj-link'
          style={{ cursor: 'pointer' }}
          href={`${process.env.PUBLIC_URL}${site.modal} ? null : ${site.link}`}
          target={site.modal ? '_self' : '_blank'}
          onClick={site.modal ? () => this.getModal(site.name) : null}
        >
          {site.name}
        </a>
      </li>
    ));

    return <ul>{sites}</ul>;
  }
}

export default Sites;

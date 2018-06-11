import React, { Component } from 'react';

class Sites extends Component {
    getModal = modal => {
        let link = '';
        document.querySelector('.modal-overlay').classList.add('show');
        setTimeout(() => {
            document.querySelector('.modal-window').classList.add('show');
        }, 200);
        
        if(modal === 'Personal Loans') {
            link = 'assets/modal-templates/personal-loans.html';
            appendModal(link);
        }

        if(modal === 'Creditwise') {
            link = 'assets/modal-templates/creditwise.html';
            appendModal(link);
        }

        if(modal === 'Income Calculator') {
            link = 'assets/modal-templates/income-calc.html';
            appendModal(link);
        }

        function appendModal(template, e) {
            (e || window.event).preventDefault();
            let modalDisplay = document.querySelector('.modal-display-data'),
            xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function (e) { 
                if (xhr.readyState === 4 && xhr.status === 200) {
                    modalDisplay.innerHTML = xhr.responseText;
                }
            }
            
            xhr.open("GET", template, true);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send();
        }
    }

    render() {
        
        const sites = this.props.sites.map((site, index) => 
            <li key={index}>
                <a className="proj-link" style={{cursor: 'pointer'}} href={site.modal ? null : site.link} target={site.modal ? '_self' : '_blank'} onClick={site.modal ? e => this.getModal(site.name) : null}>{site.name}</a>
            </li>
        )  

        return (
            <ul>    
                {sites}
            </ul>
        )
    }
}

export default Sites

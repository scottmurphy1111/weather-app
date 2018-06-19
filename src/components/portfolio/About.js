import React, { Component } from 'react'

class componentName extends Component {
    appendExperience() {
        const expBio = document.querySelectorAll('.fourth-panel .snippets li .content')[3];
        let calcDate = new Date().getFullYear() - 2009;

        expBio.innerHTML = "<p>I have been coding for " + calcDate + " years+</p>";
    }

    componentDidMount() {
        this.appendExperience();
    }

    revealContent(e) {
        let content = e.target.nextSibling,
        allContent = document.querySelectorAll('.fourth-panel .snippets li .content');
        
        //hide content divs
        if(content.classList.contains('show')){
            for(let i = 0; i < allContent.length; i++) {
                allContent[i].classList.remove('show');
            }

        } else {

            //hide all revealed content
            for(let n = 0; n < allContent.length; n++) {
                allContent[n].classList.remove('show');
            }

            //show clicked content
            content.classList.add('show');

            //reveal letters one at a time
            let contentText = document.querySelector('.fourth-panel .content.show p').textContent,
            updatePlace = document.querySelector('.fourth-panel .content.show p'),
            current = 0,
            height = content.childNodes[0].clientHeight;
            
            updatePlace.style.height = height + 'px';            
            updatePlace.innerHTML = '';

            setInterval(() => {
                if(current < contentText.length) {
                    updatePlace.innerHTML += contentText[current++];
                }
            }, 12);
        }
    }

    render() {
        const bios = this.props.content.about.map((bio, index) => 
            <li key={index}>
                <div className="code-link" onClick={this.revealContent}>
                    <span className="bio-icon left"><img src={bio.icon} alt="" /></span>{bio.heading}
                </div> 
                <div className="content">
                    <p>{bio.description}</p>
                </div>
            </li>
        )
        return (
            <ul>
                {bios}
            </ul>
        )
    }
}

export default componentName


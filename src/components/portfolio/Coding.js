import React, { Component } from 'react'

export class Coding extends Component {

    showContent(index) {
        var codeLinks = document.querySelectorAll('.third-panel .code-link'),
        clicked = codeLinks[index],
        contentAll = document.querySelectorAll('.third-panel .content'),
        clickedContent = clicked.nextElementSibling;

        if(clickedContent.classList.contains('show')) {
            for(var i = 0; i < contentAll.length; i++) {
                contentAll[i].classList.remove('show');
                codeLinks[i].classList.remove('is-open');
            }

            clickedContent.classList.remove('show');

        } else {
            for(var n = 0; n < contentAll.length; n++) {
                codeLinks[n].classList.remove('is-open');
                contentAll[n].classList.remove('show');
            }

            clicked.classList.add('is-open');
            clickedContent.classList.add('show');
        }
    }
    
    render() {
        const coding = this.props.content.coding.map((code, index) => 
            <li key={index}>
                <div className="code-link" onClick={() => this.showContent(index)}>{code.title}</div>
                <div className="content">
                    <p>{code.description}</p>
                    <img src={code.image} />
                    <p className="testimonial-copy">{code.testimonial}</p>
                </div>
            </li>
        )
        return (
            <ul>
                {coding}
            </ul>
        )
    }
}

export default Coding

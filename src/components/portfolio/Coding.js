import React, { Component } from 'react'

class Coding extends Component {

    showContent(index) {
        let codeLinks = document.querySelectorAll('.third-panel .code-link'),
        clicked = codeLinks[index],
        contentAll = document.querySelectorAll('.third-panel .content'),
        clickedContent = clicked.nextElementSibling;

        function hideAllContent() {
            contentAll.forEach(content => content.classList.remove('show'));
        }

        function closeCodeLinks() {
            codeLinks.forEach(link => link.classList.remove('is-open'));
        }

        if(clickedContent.classList.contains('show')) {
            hideAllContent();
            closeCodeLinks();
            clickedContent.classList.remove('show');
        } else {
            hideAllContent();
            closeCodeLinks();
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
                    <img src={code.image} alt={code.title} />
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

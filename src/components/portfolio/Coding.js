import React, { Component } from 'react';

class Coding extends Component {
  showContent(index) {
    let codeLinks = document.querySelectorAll('.third-panel .code-link'),
      clicked = codeLinks[index],
      contentAll = document.querySelectorAll('.third-panel .content'),
      contentWrappers = document.querySelectorAll('.third-panel .content .content-wrapper'),
      clickedContent = clicked.nextElementSibling,
      clickedContentWrapper = contentWrappers[index],
      clickedContentHeight = 0;

    function hideAllContent() {
      contentAll.forEach(content => {
        content.classList.remove('show');
        content.setAttribute('style', 'height: 0px');
      });
        
    }

    function closeCodeLinks() {
      codeLinks.forEach(link => link.classList.remove('is-open'));
    }

    if (clickedContent.classList.contains('show')) {
      hideAllContent();
      closeCodeLinks();
      clickedContentHeight = 0;
      clickedContent.setAttribute('style', 'height:' + clickedContentHeight + 'px');
      clickedContent.classList.remove('show');
    } else {
      hideAllContent();
      closeCodeLinks();
      clickedContentHeight = clickedContentWrapper.clientHeight;
      clickedContent.setAttribute('style', 'height:' + clickedContentHeight + 'px');
      clicked.classList.add('is-open');
      clickedContent.classList.add('show');
    }
  }

  render() {
    const coding = this.props.content.coding.map((code, index) => (
      <li key={index}>
        <div className='code-link' onClick={() => this.showContent(index)}>
          {code.title}
        </div>
        <div className='content'>
          <div className='content-wrapper'>
            <p>{code.description}</p>
            <img src={`${process.env.PUBLIC_URL}${code.image}`} alt={code.title} />
            <p className='testimonial-copy'>{code.testimonial}</p>
          </div>
        </div>
      </li>
    ));
    return <ul>{coding}</ul>;
  }
}

export default Coding;

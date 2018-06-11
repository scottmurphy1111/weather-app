import React, { Component } from 'react';
import Projects from './Projects';

class SecondPanel extends Component {
    render() {
        return (
            <section className="second-panel sliding-panel fade-out" 
                onWheel={this.props.onWheel}
                onTouchStart={this.props.onTouchStart}
                onTouchMove={this.props.onTouchMove}
                onTouchEnd={this.props.onTouchEnd}>
                
                 <div className="panel-wrapper">
                    <div className="inner-wrap projects-list">
                        <h2 className="category-title">{this.props.content.projectsTitle}</h2>
                        <Projects content={this.props.content} />
                    </div>
                </div> 
            </section>
        )
    }
}

export default SecondPanel

import React, { Component } from 'react';
import About from './About';

export class FourthPanel extends Component {
    render() {
        return (
            <section className="fourth-panel sliding-panel fade-out" 
                onWheel={this.props.onWheel}
                onTouchStart={this.props.onTouchStart}
                onTouchMove={this.props.onTouchMove}
                onTouchEnd={this.props.onTouchEnd}>
                <div className="panel-wrapper">
                    <div className="inner-wrap snippets">
                        <h2 className="category-title">{this.props.content.aboutTitle}</h2>
                        <About content={this.props.content} />
                    </div>
                </div>
            </section>
        )
    }
}

export default FourthPanel

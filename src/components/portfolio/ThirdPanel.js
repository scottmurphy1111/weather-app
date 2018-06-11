import React, { Component } from 'react';
import Coding from './Coding';

export class ThirdPanel extends Component {
    render() {
        return (
            <section className="third-panel sliding-panel fade-out" 
                onWheel={this.props.onWheel}
                onTouchStart={this.props.onTouchStart}
                onTouchMove={this.props.onTouchMove}
                onTouchEnd={this.props.onTouchEnd}>
                <div className="panel-wrapper">
                    <div className="inner-wrap snippets">
                        <h2 className="category-title">{this.props.content.codingTitle}</h2>
                        <Coding content={this.props.content} />
                    </div>
                </div>
            </section>
        )
    }
}

export default ThirdPanel

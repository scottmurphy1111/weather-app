import React, { Component } from 'react';
import Coding from './Coding';

export class ThirdPanel extends Component {
    render() {
        return (
            <section className="third-panel sliding-panel fade-out">
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

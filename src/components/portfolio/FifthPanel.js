import React, { Component } from 'react';
import Socials from './Socials';

export class FifthPanel extends Component {
    loadContact() {
        var phone = '336-602-3121',
        phoneDiv = document.querySelector('.insert-phone'),
        user = 'scottmurphy1111',
        domain = 'gmail.com',
        emailDiv = document.querySelector('.insert-email');

        phoneDiv.innerHTML = '<a href="tel:' + phone + '">' + phone + '</a>';
        emailDiv.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
    };

    componentDidMount() {
        this.loadContact();
    }

    render() {
        return (
            <section className="fifth-panel sliding-panel fade-out">
                <div className="panel-wrapper">
                    <div className="inner-wrap">
                    <div className="special-note">
                        <h2 className="category-title">{this.props.content.noteTitle}</h2>
                        <p>{this.props.content.contact[0].specialNote}</p>
                    </div>
                    <div className="block">
                        <h2 className="category-title">{this.props.content.contactTitle}</h2>
                        <div className="contact">
                        <ul>
                            <li className="insert-phone"></li>
                            <li className="insert-email"></li>
                        </ul>
                        </div>
                    </div>
                    <div className="block">
                        <h2 className="category-title">{this.props.content.socialTitle}</h2>
                        <div className="social">
                            <Socials content={this.props.content} />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FifthPanel

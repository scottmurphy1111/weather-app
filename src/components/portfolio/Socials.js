import React, { Component } from 'react';
import axios from 'axios';

export class Socials extends Component {
    state = { soData: '' }
    
    getSoData = () => {
        const url = 'http://api.stackexchange.com/2.2/users/5711949/?site=stackoverflow';
        axios.get(url)
            .then(resp => {
                this.setState({ soData: resp});
            }
        );
    }

    componentDidMount() {
        this.getSoData();
        console.log(this.state);
    }
    render() {
        const socials = this.props.content.contact[0].socials.map((social, index) => 
            <li key={index}>
                <a title={social.title} target="_blank" href={social.link}>
                    {/* <div className="so-info-wrap">
                        {(social.title === 'Stack Overflow' ?
                        <div>
                            <div className="so-tooltip">
                                <p>Reputation: {totalSoRep}</p>
                                <hr />
                                <p>Badges:</p>
                                <ul>
                                    <li>Bronze: {bronzeBadges}</li>
                                    <li>Silver: {silverBadges}</li>
                                    <li>Gold: {goldBadges}</li>
                                </ul>
                            </div>
                            <div className="so-info rep">{totalSoRep}</div>
                            <div className="so-info badges">{totalSoBadges}</div> 
                        </div>
                        : null
                        )}
                    </div> */}
                    <img src={social.icon} />
                </a>
            </li>
        )
        return (
           <ul>
               {socials}
            </ul>
        )
    }
}

export default Socials

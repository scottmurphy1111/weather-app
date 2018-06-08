import React, { Component } from 'react';
import axios from 'axios';

export class Socials extends Component {
    state = { 
        totalSoRep: '',
        bronzeBadges: '',
        silverBadges: '',
        goldBadges: '',
        totalSoBadges: ''
    };
    
    getSoData = () => {
        const url = 'https://api.stackexchange.com/2.2/users/5711949/?site=stackoverflow';
        axios.get(url)
            .then(resp => {
                var allItems = resp.data.items[0],
                badgeCounts = allItems.badge_counts;
                this.setState({ 
                    totalSoRep: allItems.reputation,
                    bronzeBadges: badgeCounts.bronze,
                    silverBadges: badgeCounts.silver,
                    goldBadges: badgeCounts.gold,
                    totalSoBadges: Object.keys(badgeCounts).length
                });
            }
        );
    }

    componentDidMount() {
        this.getSoData();
    }
    render() {
        const socials = this.props.content.contact[0].socials.map((social, index) => 
            <li key={index}>
                <a title={social.title} target="_blank" href={social.link}>
                    <div className="so-info-wrap">
                        {(social.title === 'Stack Overflow' ?
                        <div>
                            <div className="so-tooltip">
                                <p>Reputation: {this.state.totalSoRep}</p>
                                <hr />
                                <p>Badges:</p>
                                <ul>
                                    <li>Bronze: {this.state.bronzeBadges}</li>
                                    <li>Silver: {this.state.silverBadges}</li>
                                    <li>Gold: {this.state.goldBadges}</li>
                                </ul>
                            </div>
                            <div className="so-info rep">{this.state.totalSoRep}</div>
                            <div className="so-info badges">{this.state.totalSoBadges}</div> 
                        </div>
                        : null
                        )}
                    </div>
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

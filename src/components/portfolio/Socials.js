import React, { Component } from 'react';

const USER_ID = "5711949";

class Socials extends Component {

    state = { 
        totalSoRep: undefined,
        bronzeBadges: undefined,
        silverBadges: undefined,
        goldBadges: undefined,
        totalSoBadges: undefined
    };
    
    getSoData = async () => {
        const api_call = await fetch(`https://api.stackexchange.com/2.2/users/${USER_ID}/?site=stackoverflow`);
        const soData = await api_call.json();
        let allItems = [],
        badgeCounts = 0;
        if(!soData.error_id) {
            allItems = soData.items[0];
            badgeCounts = allItems.badge_counts;
        } else {
            console.error('Couldnt return Stack Overflow User Data', soData.error_id);
            return false;
        }

        if(allItems) {
            this.setState({ 
                totalSoRep: allItems.reputation,
                bronzeBadges: badgeCounts.bronze,
                silverBadges: badgeCounts.silver,
                goldBadges: badgeCounts.gold,
                totalSoBadges: Object.keys(badgeCounts).length
            });
        } else {
            this.setState({
                totalSoRep: undefined,
                bronzeBadges: undefined,
                silverBadges: undefined,
                goldBadges: undefined,
                totalSoBadges: undefined
            })
        }
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
                    <img src={social.icon} alt={social.title} />
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

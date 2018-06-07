import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           timer: 0
        }

        this.fireSkills = this.fireSkills.bind(this);
    }

    fireSkills = () => {
        setTimeout(() => {
            const toReveal = document.querySelectorAll('.skills .to-reveal');

            let processAll = (els) => {
                this.setState({
                    timer: this.state.timer + 36
                });
                
                setTimeout(() => {
                    toReveal[els].classList.add('show');
                }, this.state.timer);
            };

            setTimeout(() => {
                for(let n = 0; n < toReveal.length; n++) {
                    processAll(n);
                }
            }, 3400);
        });
    }

    componentDidMount() {
        this.fireSkills();
    }

    render() {
        const skills = this.props.content.skills.map((skill, index) => 
            <li key={index}>
                <span className="to-reveal ">{skill}</span>
                <span className={"to-reveal pipe " + (index === 2 ? 'desktop-only': '') + ' ' + (index === 4 ? 'desktop-only': '') + ' ' + (index === 3 ? 'hide-tablet': '') + ' ' + (index === 6 ? 'hide': '')}>|</span> 
            </li>
        );
        return (
            <ul>
                {skills}
            </ul>
        )
    }
}

export default Skills

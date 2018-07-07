import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0
    };

    this.fireSkills = this.fireSkills.bind(this);
  }

  fireSkills = () => {
    const toReveal = document.querySelectorAll(".skills .to-reveal");

    this.processAll = skill => {
      this.setState({
        timer: this.state.timer + 40
      });

      setTimeout(() => {
        skill.classList.add("show");
      }, this.state.timer);
    };

    setTimeout(() => {
      toReveal.forEach(skill => this.processAll(skill));
    }, 3500);
  };

  componentDidMount() {
    this.fireSkills();
  }

  render() {
    const skills = this.props.content.skills.map((skill, index) => (
      <li key={index}>
        <span className="to-reveal ">{skill}</span>
        <span
          className={
            "to-reveal pipe " +
            (index === 1 ? "desktop-only" : "") +
            " " +
            (index === 4 ? "desktop-only" : "") +
            " " +
            (index === 3 ? "hide-tablet" : "") +
            " " +
            (index === 6 ? "hide" : "")
          }
        >
          |
        </span>
      </li>
    ));
    return <ul>{skills}</ul>;
  }
}

export default Skills;

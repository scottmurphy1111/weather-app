import React, { Component } from "react";
import Sites from "./Sites";

class Projects extends Component {
  render() {
    const projects = this.props.content.projects.map((project, index) => (
      <li key={index}>
        <p>
          <span className="icon">
            <img src={project.icon} alt={project.companyName} />
          </span>
          {project.companyName} - {project.role}
        </p>
        <Sites sites={project.sites} />
      </li>
    ));

    return <ul>{projects}</ul>;
  }
}

export default Projects;

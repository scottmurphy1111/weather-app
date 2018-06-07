import React, { Component } from 'react';
import Sites from './Sites';
import c1Logo from '../../assets/images/portfolio/c1.svg';

class Projects extends Component {
    render() {
        const projects = this.props.content.projects.map((project, index) => 
            <li key={index}>
                <p><span className="icon"><img src={project.icon} /></span>{project.companyName} - {project.role}</p>
                <Sites sites={project.sites} />
            </li>
        )

        return (
            <ul>
                {projects}
            </ul>
        )
    }
}

export default Projects


{/*<ul>
                            <li ng-repeat="project in projects">
                            <p><span className="icon" ng-include="project.icon"></span>{{project.companyName}} - {{project.role}}</p>
                            <ul>
                                <li ng-repeat="site in project.sites">
                                <a ng-if="project.companyName === 'Celerity IT'" className="proj-link" sm-modal ng-click="portfolio.chosenTemplate='app/components/portfolio/modal-templates/personal-loans.html'" href="#">{{site.name}}</a>
                                <a ng-if="project.companyName !== 'Celerity IT'" className="proj-link" ng-href="{{site.link}}" target="_blank">{{site.name}}</a>
                                </li>
                            </ul>
                            </li>
                        </ul> */}
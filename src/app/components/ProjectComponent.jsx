import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../class/Project';

export default class ProjectComponent extends Component {

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Project),
        };
    }

    linkTo(link, icon, text) {
        return link ?
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <i className={`fa ${icon}`} aria-hidden="true"></i> <small>{text}</small>
            </a> : '';
    }

    render() {
        return (
            <div className="kt--project">
                <div className="kt--project-box kt--project-box__1">
                    <h4>{this.props.item.title}</h4>
                    <div className="kt--project-links">
                        {this.linkTo(this.props.item.linkwebsite, 'fa-globe', 'website')}
                        {this.linkTo(this.props.item.linkgithub, 'fa-github', 'github')}
                    </div>
                    <p>{this.props.item.description}</p>
                </div>
                <div className="kt--project-box kt--project-box__2">
                    <img className="uk-align-center" alt={this.props.item.title} src={this.props.item.image} />
                </div>
            </div>
        );
    }

}

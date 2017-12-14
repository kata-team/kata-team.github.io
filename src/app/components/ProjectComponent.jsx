import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../class/Project';

export default class ProjectComponent extends Component {

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Project).isRequired,
        };
    }

    linkTo(link, icon, text) {
        return link ?
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <i className={`fa ${icon}`} aria-hidden="true"></i> <small>{text}</small>
            </a> : null;
    }

    render() {
        return (
            <div className="component--project">
                <div className="component--project-box component--project-box__1">
                    <h4>{this.props.item.title}</h4>
                    <div className="component--project-box-links">
                        {this.linkTo(this.props.item.linkwebsite, 'fa-globe', 'website')}
                        {this.linkTo(this.props.item.linkgithub, 'fa-github', 'github')}
                        {this.linkTo(this.props.item.linkvideo, 'fa-play-circle-o', 'video')}
                    </div>
                    <p>{this.props.item.description}</p>
                </div>
                <div className="component--project-box component--project-box__2">
                    <img alt={this.props.item.title} src={this.props.item.image} />
                </div>
            </div>
        );
    }

}

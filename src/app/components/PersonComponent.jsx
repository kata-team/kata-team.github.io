import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from '../class/Person';

export default class PersonComponent extends Component {

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Person),
        };
    }

    get linkWebsite() {
        return this.props.item.linkwebsite ?
            <a target="_blank" rel="noopener noreferrer" href={this.props.item.linkwebsite}>
                <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
            </a> : '';
    }

    get personId() {
        let id = `${this.props.item.firstname} ${this.props.item.lastname}`;
        return id.replace(/\s/g, '-').toLowerCase();
    }

    get linkGithub() {
        return this.props.item.linkgithub ?
            <a target="_blank" rel="noopener noreferrer" href={this.props.item.linkgithub}>
                <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a> : '';
    }

    get linkLinkedin() {
        return this.props.item.linklinkedin ?
            <a target="_blank" rel="noopener noreferrer" href={this.props.item.linklinkedin}>
                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            </a> : '';
    }

    render() {
        return (
            <div>
                <div className="kt--person" data-person={this.personId}>
                    <img src={this.props.item.picture} alt="" className="kt--person__figure" />
                    <div className="kt--person__figure kt--pattern">
                        <div>
                            <h3><span>{this.props.item.firstname}</span> <span>{this.props.item.lastname}</span></h3>
                            <p>
                                {this.linkWebsite}
                                {this.linkGithub}
                                {this.linkLinkedin}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
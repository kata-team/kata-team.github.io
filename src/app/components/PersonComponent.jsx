import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from '../class/Person';

export default class PersonComponent extends Component {

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Person),
        };
    }

    get personId() {
        let id = `${this.props.item.firstname} ${this.props.item.lastname}`;
        return id.replace(/\s/g, '-').toLowerCase();
    }

    linkTo(link, icon) {
        return link ?
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <i className={`fa ${icon} fa-lg`} aria-hidden="true"></i>
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
                                {this.linkTo(this.props.item.linkwebsite, 'fa-globe')}
                                {this.linkTo(this.props.item.linkgithub, 'fa-github')}
                                {this.linkTo(this.props.item.linklinkedin, 'fa-linkedin')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

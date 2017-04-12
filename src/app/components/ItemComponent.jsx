import React, { Component } from 'react';
import _ from 'underscore';
import Item from '../class/Item';

export default class ItemComponent extends Component {

    static get propTypes() {
        return {
            item: React.PropTypes.instanceOf(Item),
        };
    }

    get title() {
        return (
            <a target="_blank" rel="noopener noreferrer" {...this.props.item.url ? { href: this.props.item.url } : {}}>
                { this.props.item.title }
            </a>);
    }

    get technologies() {
        return _.isEmpty(this.props.item.technologies) ? '' :
            <div className="uk-card-footer">
                {_.map(this.props.item.technologies, (technology, key) => (
                    <span key={key}><div className="uk-label">{technology.trim()}</div>&nbsp;</span>))}
            </div>;
    }

    get customer() {
        return this.props.item.customerLogo ?
            <div className="uk-width-auto uk-column">
                <a target="_blank" rel="noopener noreferrer"
                   {...this.props.item.customerUrl ? { href: this.props.item.customerUrl } : {}}>
                    <img className="uk-border" width="50" height="50" name={this.props.item.customer}
                         title={this.props.item.customer} src={this.props.item.customerLogo} />
                </a>
            </div> : '';
    }

    get company() {
        return this.props.item.companyLogo ?
            <div className="uk-width-auto uk-column">
                <a target="_blank" rel="noopener noreferrer"
                   {...this.props.item.companyUrl ? { href: this.props.item.companyUrl } : {}}>
                    <img className="uk-border" width="50" height="50" name={this.props.item.company}
                         title={this.props.item.company} src={this.props.item.companyLogo} />
                </a>
            </div> : '';
    }

    get images() {
        return _.isEmpty(this.props.item.images) ? '' :
            _.map(this.props.item.images, (image, key) => (
                <div  key={key} className="uk-card-media-bottom uk-margin-bottom">
                    <img className="uk-align-center" src={image} />
                </div>));
    }

    render() {
        return (
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle uk-grid">
                            {this.customer}
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{this.title}</h3>
                                <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
                                    {this.props.item.role}
                                </p>
                                <p className="uk-text-meta uk-margin-remove-top">{this.props.item.range}</p>
                            </div>
                            {this.company}
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <p>{this.props.item.description}</p>
                    </div>
                    {this.images}
                    {this.technologies}
                </div>
            </div>
        );
    }

}

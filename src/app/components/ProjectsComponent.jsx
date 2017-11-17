import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SpinnerComponent from './SpinnerComponent';
import ProjectComponent from './ProjectComponent';

export default class ProjectsComponent extends Component {

    static get propTypes() {
        return {
            projects: PropTypes.array,
        };
    }

    static get defaultProps() {
        return {
            projects: [],
        };
    }

    renderItems(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <ProjectComponent key={key} item={item} />
        )) : <SpinnerComponent />;
    }

    render() {
        return (
            <div className="component--projects">
                <section className="kt-section kt-section-over">
                    <div className="kt-container">
                        { this.renderItems(this.props.projects) }
                    </div>
                </section>
            </div>
        );
    }

}

import React, { Component } from 'react';
import TaglineComponent from './TaglineComponent';
import ProjectsComponent from './ProjectsComponent';
import TeamComponent from './TeamComponent';
import LoaderActions from '../actions/LoaderActions';

export default class AppComponent extends Component {

    componentDidMount() {
        LoaderActions.load();
    }

    render() {
        return (
            <div className="app">
                <TaglineComponent />
                <TeamComponent />
                <ProjectsComponent />
            </div>
        );
    }

}

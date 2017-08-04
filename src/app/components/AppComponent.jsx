import React, { Component } from 'react';
import ProjectsComponent from './ProjectsComponent';
import LoaderActions from '../actions/LoaderActions';

export default class AppComponent extends Component {

    componentDidMount() {
        LoaderActions.load();
    }

    render() {
        return (
            <div className="app">
                <ProjectsComponent />
            </div>
        );
    }

}

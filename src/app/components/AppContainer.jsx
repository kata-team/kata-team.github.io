import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TaglineComponent from './TaglineComponent';
import ProjectsComponent from './ProjectsComponent';
import TeamComponent from './TeamComponent';
import LoaderActions from '../actions/LoaderActions';
import TeamStore from '../stores/TeamStore';
import ProjectsStore from '../stores/ProjectsStore';

class AppContainer extends Component {

    componentDidMount() {
        LoaderActions.load();
    }

    static getStores() {
        return [TeamStore, ProjectsStore];
    }

    static calculateState() {
        return {
            team: TeamStore.getState(),
            projects: ProjectsStore.getState(),
        };
    }

    render() {
        return (
            <div className="app">
                <TaglineComponent />
                <TeamComponent team={this.state.team}/>
                <ProjectsComponent projects={this.state.projects}/>
            </div>
        );
    }

}

export default Container.create(AppContainer);
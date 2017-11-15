import React, { Component } from 'react';
import _ from 'lodash';
import SpinnerComponent from './SpinnerComponent';
import PersonComponent from './PersonComponent';
import TeamStore from '../stores/TeamStore';

export default class TeamComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { team: TeamStore.getState() };
    }

    componentDidMount() {
        this.listener = TeamStore.addListener(this.onTeamStoreHandler.bind(this));
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onTeamStoreHandler() {
        this.setState({ team: TeamStore.getState() });
    }

    renderItems(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <PersonComponent key={key} item={item} />
        )) : <SpinnerComponent />;
    }

    render() {
        return (
            <div className="app--team">
                <section className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3 uk-grid uk-text-center kt--team">
                            { this.renderItems(this.state.team) }
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

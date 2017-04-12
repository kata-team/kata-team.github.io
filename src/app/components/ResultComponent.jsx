import React, { Component } from 'react';
import _ from 'underscore';
import ItemComponent from './ItemComponent';
import ItemsStore from '../stores/ItemsStore';

export default class ResultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { result: ItemsStore.result() };
    }

    componentDidMount() {
        ItemsStore.addChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        ItemsStore.removeChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    onChangeResultHandler() {
        this.setState({ result: ItemsStore.result() });
    }

    renderItems(items) {
        return _.map(items, (item, key) => (
            <div key={key} className="uk-grid-match uk-grid-margin">
                <ItemComponent item={item} />
            </div>
        ));
    }

    render() {
        return (
            <div className="app--result">
                <div className="uk-container">
                    <div className="uk-child-width-1-1@l uk-grid uk-grid-match">
                        { this.renderItems(this.state.result) }
                    </div>
                </div>
            </div>
        );
    }

}

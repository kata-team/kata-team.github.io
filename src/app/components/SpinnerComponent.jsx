import React, { Component } from 'react';

export default class SpinnerComponent extends Component {

    render() {
        return (
            <div className="component--spinner">
                <div className="child component--spinner__1"></div>
                <div className="child component--spinner__2"></div>
            </div>
        );
    }

}

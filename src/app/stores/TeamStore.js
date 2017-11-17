import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class TeamStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LOADED_TEAM:
                return action.value;
            default:
                return state;
        }
    }
}

export default new TeamStore();

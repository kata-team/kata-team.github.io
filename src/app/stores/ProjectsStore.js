import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class ProjectsStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LOADED_PROJECTS:
                return action.value;
            default:
                return state;
        }
    }
}

export default new ProjectsStore();

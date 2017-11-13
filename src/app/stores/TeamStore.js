import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoaderConstants from '../constants/LoaderConstants';

class TeamStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
        case LoaderConstants.LOADED_TEAM:
            return action.value;
        default:
            return state;
        }
    }
}

export default new TeamStore();

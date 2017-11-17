import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from './ActionTypes';
import Api from '../Api';

export default {
    load() {
        Api.load();
    },
    loadedTeam(people) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOADED_TEAM,
            value: people,
        });
    },
    loadedProjects(projects) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOADED_PROJECTS,
            value: projects,
        });
    },
};

import AppDispatcher from '../dispatcher/AppDispatcher';
import LoaderConstants from '../constants/LoaderConstants';
import Api from '../Api';

export default {
    load() {
        Api.load();
    },
    loadedTeam(members) {
        AppDispatcher.dispatch({
            type: LoaderConstants.LOADED_TEAM,
            value: members,
        });
    },
    loadedProjects(projects) {
        AppDispatcher.dispatch({
            type: LoaderConstants.LOADED_PROJECTS,
            value: projects,
        });
    },
};

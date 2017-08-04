import AppDispatcher from '../dispatcher/AppDispatcher';
import LoaderConstants from '../constants/LoaderConstants';

export default {
    load() {
        AppDispatcher.dispatch({
            actionType: LoaderConstants.LOAD,
        });
    },
};

import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoaderConstants from '../constants/LoaderConstants';
import ItemsLoader from '../class/ItemsLoader';
import Project from '../class/Project';

const itemsLoader = new ItemsLoader();

const EVENTS = {
    LOAD: 'LOAD',
};

// const WORKSHEET_ID = '112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo';

const state = {
    endpoint: {
        // type: 'SPREADSHEETS',
        // url: `https://spreadsheets.google.com/feeds/list/${WORKSHEET_ID}/1/public/values?alt=json-in-script&callback={1}`,
        type: 'JSON',
        url: 'projects.json',
    },
};

const results = {
    projects: [],
};

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    projects() {
        return results.projects;
    },
    emitLoad() {
        this.emit(EVENTS.LOAD);
    },
    addLoadListener(callback) {
        this.on(EVENTS.LOAD, callback);
    },
    removeLoadListener(callback) {
        this.removeListener(EVENTS.LOAD, callback);
    },
});

AppDispatcher.register((action) => {
    switch (action.actionType) {
    case LoaderConstants.LOAD:
        itemsLoader.load(state.endpoint, Project, (projects) => {
            results.projects = projects;
            ItemsStore.emitLoad();
        });
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;

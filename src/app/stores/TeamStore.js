import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoaderConstants from '../constants/LoaderConstants';
import ItemsLoader from '../class/ItemsLoader';
import Person from '../class/Person';

const itemsLoader = new ItemsLoader();

const EVENTS = {
    LOAD: 'LOAD',
};

const WORKSHEET_ID = '1rzoqR05segkYtSVNfc-F_3TyKW4RfaLXX58Fm-q9DGs';

const state = {
    endpoint: {
        type: 'SPREADSHEETS',
        url: `https://spreadsheets.google.com/feeds/list/${WORKSHEET_ID}/1/public/values?alt=json-in-script&callback={1}`,
    },
};

const results = {
    items: [],
};

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    items() {
        return results.items;
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
        itemsLoader.load(state.endpoint, Person, (items) => {
            results.items = items;
            ItemsStore.emitLoad();
        });
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;

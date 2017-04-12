import EventEmitter from 'events';
import _ from 'underscore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import ItemsLoader from '../class/ItemsLoader';

const itemsLoader = new ItemsLoader();

const EVENTS = {
    CHANGE_RESULT: 'CHANGE_RESULT',
};

const itemPropsSearchable = ['title', 'description', 'role', 'customer', 'company', 'technologies'];

// const WORKSHEET_ID = '112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo';

const state = {
    endpoint: {
        // type: 'SPREADSHEETS',
        // url: `https://spreadsheets.google.com/feeds/list/${WORKSHEET_ID}/1/public/values?alt=json-in-script&callback={1}`,
        type: 'JSON',
        url: 'items.json',
    },
    criteria: '',
};

const results = {
    items: [],
};

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    result() {
        return results.items;
    },
    emitChangeResult() {
        this.emit(EVENTS.CHANGE_RESULT);
    },
    addChangeResultListener(callback) {
        this.on(EVENTS.CHANGE_RESULT, callback);
    },
    removeChangeResultListener(callback) {
        this.removeListener(EVENTS.CHANGE_RESULT, callback);
    },
});

const search = () => {
    itemsLoader.load(state.endpoint, (items) => {
        const criteriaRegExp = new RegExp(state.criteria, 'i');
        results.items = _.filter(items, (item) => {
            return _.some(itemPropsSearchable, (prop) => { return criteriaRegExp.test(item[prop]) });
        });
        ItemsStore.emitChangeResult();
    });
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
    case SearchConstants.CHANGE_CRITERIA:
        state.criteria = action.criteria;
        search();
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;

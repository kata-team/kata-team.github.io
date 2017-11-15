import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

export default class ItemsLoader {

    constructor() {
        this.items = [];
    }

    load(url, Obj, callback, decorator) {
        if (_.isEmpty(this.items)) {
            switch (true) {
                case (url.indexOf('https://spreadsheets.google.com/feeds/list/') === 0):
                    this.googleSpreadsheets(url, Obj, callback, decorator);
                    break;
                default:
                    this.json(url, Obj, callback, decorator);
                    break;
            }
        } else {
            callback(this.items);
        }
    }

    json(url, Obj, callback, decorator) {
        const decorate = decorator || ((item) => { return item });
        client(url).then((response) => {
            _.map(response.entity, (elm) => {
                const item = decorate(elm);
                this.items.push(new Obj(item));
            });
            callback(this.items);
        });
    }

    googleSpreadsheets(url, Obj, callback, decorator) {
        const decorate = decorator || ((item) => { return item });
        rest(url).then((response) => {
            const jsonData = JSON.parse(response.entity);

            const convertEntryToItem = (entry) => {
                let item = {};
                const rx = /^gsx\$(.*)$/;
                _.map(entry, (value, key) => {
                    if (rx.test(key)) {
                        item[rx.exec(key)[1]] = value.$t;
                    }
                });

                item = decorate(item);

                return new Obj(item);
            };

            _.map(jsonData.feed.entry, (entry) => {
                const item = convertEntryToItem(entry);
                this.items.push(item);
            });

            callback(this.items);
        });
    }
}

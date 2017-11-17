import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

class ItemsLoader {

    load(url, Obj, callback, decorator) {
        switch (true) {
            case (url.indexOf('https://spreadsheets.google.com/feeds/list/') === 0):
                this.googleSpreadsheets(url, Obj, callback, decorator);
                break;
            default:
                this.json(url, Obj, callback, decorator);
                break;
        }
    }

    json(url, Obj, callback, decorator) {
        const decorate = decorator || ((item) => { return item });
        client(url).then((response) => {
            callback(_.map(response.entity, (elm) => {
                return new Obj(decorate(elm));
            }));
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

            callback(_.map(jsonData.feed.entry, (entry) => {
                return convertEntryToItem(entry);
            }));
        });
    }
}

export default new ItemsLoader();
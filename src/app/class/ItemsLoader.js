import _ from 'lodash';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

const client = rest.wrap(mime);

class ItemsLoader {

    load(url, Obj, callback, decorator) {
        switch (true) {
            case (url.indexOf('https://docs.google.com/spreadsheets/') === 0):
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

            const entityExtracted = response.entity.substring(47).slice(0, -2);
            const jsonData = JSON.parse(entityExtracted);

            const convertEntryToItem = (entry, columnsKeys) => {
                let item = {};
                _.map(entry.c, (value, key) => {
                    item[columnsKeys[key]['v']] = value != null ? value['v'] : null;
                });

                item = decorate(item);
                return new Obj(item);
            };

            callback(_.map(jsonData.table.rows.slice(1), (entry) => {
                const columnsKeys = jsonData.table.rows[0].c
                return convertEntryToItem(entry, columnsKeys);
            }));
        });
    }
}

export default new ItemsLoader();
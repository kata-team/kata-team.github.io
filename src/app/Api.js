import ItemsLoader from './class/ItemsLoader';
import LoaderActions from './actions/LoaderActions';

import Person from './class/Person';
import Project from './class/Project';

class Api {

    constructor() {
        this.spreadsheetId = '1rzoqR05segkYtSVNfc-F_3TyKW4RfaLXX58Fm-q9DGs';
    }

    load() {
        this.loadFromSpreadsheet(1010211185, Person, LoaderActions.loadedTeam);
        this.loadFromSpreadsheet(35309925, Project, LoaderActions.loadedProjects);
    }

    loadFromSpreadsheet(worksheet, Obj, propagateAction) {
        ItemsLoader.load(`https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/gviz/tq?tqx=out:json&tq&gid=${worksheet}`, Obj, (items) => {
            propagateAction(items);
        });
    }

}

export default new Api();

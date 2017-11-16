import ItemsLoader from './class/ItemsLoader';
import LoaderActions from './actions/LoaderActions';

import Person from './class/Person';
import Project from './class/Project';

class Api {

    constructor() {
        this.spreadsheetId = '1rzoqR05segkYtSVNfc-F_3TyKW4RfaLXX58Fm-q9DGs';
    }

    load() {
        this.loadFromSpreadsheet(1, Person, LoaderActions.loadedTeam);
        this.loadFromSpreadsheet(2, Project, LoaderActions.loadedProjects);
    }

    loadFromSpreadsheet(worksheet, Obj, propagateAction) {
        (new ItemsLoader()).load(`https://spreadsheets.google.com/feeds/list/${this.spreadsheetId}/${worksheet}/public/values?alt=json`, Obj, (items) => {
            propagateAction(items);
        });
    }

}

export default new Api();

import ItemsLoader from './class/ItemsLoader';
import LoaderActions from './actions/LoaderActions';

import Person from './class/Person';
import Project from './class/Project';

class Api {

    constructor() {
        this.spreadsheetId = '1rzoqR05segkYtSVNfc-F_3TyKW4RfaLXX58Fm-q9DGs';
    }

    load() {
        this.loadTeam();
        this.loadProjects();
    }

    loadTeam() {
        (new ItemsLoader()).load(`https://spreadsheets.google.com/feeds/list/${this.spreadsheetId}/1/public/values?alt=json-in-script&callback={1}`, Person, (items) => {
            LoaderActions.loadedTeam(items);
        });
    }

    loadProjects() {
        (new ItemsLoader()).load(`https://spreadsheets.google.com/feeds/list/${this.spreadsheetId}/2/public/values?alt=json-in-script&callback={1}`, Project, (items) => {
            LoaderActions.loadedProjects(items);
        });
    }
}

export default new Api();

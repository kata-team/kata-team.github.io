export default class Project {
    constructor({ title = '', image = '', description = '', linkWebsite = '', linkGithub = '' }) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.linkWebsite = linkWebsite;
        this.linkGithub = linkGithub;
    }
}

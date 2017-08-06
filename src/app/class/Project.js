export default class Project {
    constructor({ title = '', image = '', description = '', linkwebsite = '', linkgithub = '' }) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.linkwebsite = linkwebsite;
        this.linkgithub = linkgithub;
    }
}

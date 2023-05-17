export default class Project {
    constructor({ title = '', image = '', description = '', linkWebsite = '', linkGithub = '', linkVideo = '' }) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.linkwebsite = linkWebsite;
        this.linkgithub = linkGithub;
        this.linkvideo = linkVideo;
    }
}

export default class Person {
    constructor({ firstname = '', lastname = '', picture = '', linkWebsite = '', linkGithub = '', linkLinkedin = '' }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.picture = picture;
        this.linkwebsite = linkWebsite;
        this.linkgithub = linkGithub;
        this.linklinkedin = linkLinkedin;
    }
}

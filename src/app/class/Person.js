export default class Person {
    constructor({ firstname = '', lastname = '', picture = '', linkwebsite = '', linkgithub = '', linklinkedin = '' }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.picture = picture;
        this.linkwebsite = linkwebsite;
        this.linkgithub = linkgithub;
        this.linklinkedin = linklinkedin;
    }
}

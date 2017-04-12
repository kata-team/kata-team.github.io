export default class Item {
    constructor({ title = '', description = '', begin = '', end = '', url = '', technologies = '', role = '',
        company = '', companyUrl = '', companyLogo = '', images = '',
        customer = '', customerUrl = '', customerLogo = '' }) {
        // Project
        this.title = title;
        this.url = url;
        this.role = role;
        this.description = description;
        this.begin = begin;
        this.end = end;
        this.technologies = technologies ? technologies.split(',') : [];
        this.images = images ? images.split(',') : [];
        // Customer
        this.customer = customer;
        this.customerUrl = customerUrl;
        this.customerLogo = customerLogo;
        // Company
        this.company = company;
        this.companyUrl = companyUrl;
        this.companyLogo = companyLogo;
    }

    get range() {
        return `${this.begin}${this.end !== '' ? ` - ${this.end}` : ''}`;
    }
}

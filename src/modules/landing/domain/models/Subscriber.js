export class Subscriber {
    constructor(email) {
        this.email = email;
        this.subscriptionDate = new Date();
    }

    validate() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    toJSON() {
        return {
            email: this.email,
            subscriptionDate: this.subscriptionDate.toISOString()
        };
    }
}
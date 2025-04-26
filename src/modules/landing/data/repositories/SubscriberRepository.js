import { Subscriber } from '../../domain/models/Subscriber.js';

export class SubscriberRepository {
    constructor() {
        // Initialize storage (can be replaced with Supabase or other backend later)
        this.subscribers = [];
    }

    async addSubscriber(email) {
        const subscriber = new Subscriber(email);
        
        if (!subscriber.validate()) {
            throw new Error('Invalid email format');
        }

        // Store subscriber (currently in memory, can be modified for persistence)
        this.subscribers.push(subscriber);

        return subscriber;
    }

    async getAllSubscribers() {
        return this.subscribers;
    }

    // Method to be implemented when connecting to backend
    async saveToDatabase(subscriber) {
        // TODO: Implement database connection
        console.log('Saving to database:', subscriber.toJSON());
        return true;
    }
}
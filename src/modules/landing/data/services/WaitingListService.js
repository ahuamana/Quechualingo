import { SubscriberRepository } from '../repositories/SubscriberRepository.js';

export class WaitingListService {
    constructor() {
        this.repository = new SubscriberRepository();
    }

    async subscribe(email) {
        try {
            const subscriber = await this.repository.addSubscriber(email);
            
            // Here we can add additional business logic
            // such as sending welcome emails, notifications, etc.
            
            // Save to persistent storage when implemented
            await this.repository.saveToDatabase(subscriber);
            
            return {
                success: true,
                message: '¡Gracias por suscribirte!',
                data: subscriber
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Error al procesar la suscripción',
                error: error
            };
        }
    }

    async getSubscribers() {
        try {
            const subscribers = await this.repository.getAllSubscribers();
            return {
                success: true,
                data: subscribers
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error al obtener suscriptores',
                error: error
            };
        }
    }
}
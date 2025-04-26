class WaitingListForm extends HTMLElement {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here we'll later integrate with SubscriberRepository
        console.log('Email submitted:', email);
        
        // Clear form and show success message
        event.target.reset();
        this.showMessage('¡Gracias por tu interés! Te contactaremos pronto.');
    }

    showMessage(message) {
        const messageElement = this.querySelector('.waiting-list__message');
        messageElement.textContent = message;
        messageElement.classList.remove('d-none');
        
        setTimeout(() => {
            messageElement.classList.add('d-none');
        }, 3000);
    }

    addEventListeners() {
        const form = this.querySelector('form');
        form.addEventListener('submit', this.handleSubmit);
    }

    render() {
        this.innerHTML = `
            <section class="waiting-list">
                <div class="container">
                    <h2 class="mb-4">¡Únete a la lista de espera!</h2>
                    <form class="waiting-list__form">
                        <div class="waiting-list__input">
                            <input type="email" 
                                   class="form-control" 
                                   placeholder="Tu correo electrónico" 
                                   required>
                        </div>
                        <button type="submit" class="btn btn-primary">Unirme a la lista</button>
                        <div class="waiting-list__message alert alert-success mt-3 d-none"></div>
                    </form>
                </div>
            </section>
        `;
    }
}

customElements.define('app-waiting-list', WaitingListForm);

const waitingListContainer = document.getElementById('waiting-list-form');
waitingListContainer.innerHTML = '<app-waiting-list></app-waiting-list>';
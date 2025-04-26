class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <p class="mb-0">© ${currentYear} Quechualingo. Todos los derechos reservados.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);

const footerContainer = document.getElementById('footer');
footerContainer.innerHTML = '<app-footer></app-footer>';
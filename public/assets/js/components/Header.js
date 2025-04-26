 class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="header">
                <div class="container">
                    <h1 class="header__title">¡Aprende quechua gratis, fácil y jugando!</h1>
                    <p class="text-light">Descubre una nueva forma de aprender el idioma de los Incas</p>
                </div>
            </header>
        `;
    }
}

customElements.define('app-header', Header);

const headerContainer = document.getElementById('header');
headerContainer.innerHTML = '<app-header></app-header>';
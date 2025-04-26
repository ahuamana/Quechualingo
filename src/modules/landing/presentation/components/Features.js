class Features extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const features = [
            {
                title: 'Lecciones por niveles',
                description: 'Aprende desde el nivel 1 hasta el 10 a tu propio ritmo'
            },
            {
                title: 'Vocabulario útil',
                description: 'Expresiones cotidianas y palabras de uso frecuente'
            },
            {
                title: 'Juegos interactivos',
                description: 'Aprende jugando con audio y ejercicios prácticos'
            },
            {
                title: 'Seguimiento personalizado',
                description: 'Monitorea tu progreso y mejora constantemente'
            },
            {
                title: '100% gratuito',
                description: 'Accede a todo el contenido sin costo alguno'
            }
        ];

        this.innerHTML = `
            <section class="features">
                <div class="container">
                    <h2 class="text-center mb-5">¿Por qué elegir Quechualingo?</h2>
                    <div class="features__grid">
                        ${features.map(feature => `
                            <div class="feature-card">
                                <h3 class="h5 mb-3">${feature.title}</h3>
                                <p class="mb-0">${feature.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('app-features', Features);

const featuresContainer = document.getElementById('features');
featuresContainer.innerHTML = '<app-features></app-features>';
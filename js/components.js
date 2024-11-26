class ProductCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Crear la estructura interna del componente
        shadow.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 16px;
                    text-align: center;
                }
                .card img {
                    width: 100%;
                    border-radius: 8px;
                }
                .card h3 {
                    margin: 16px 0 8px;
                    font-size: 18px;
                    color: #333;
                }
                .card p {
                    font-size: 16px;
                    color: #555;
                }
            </style>
            <div class="card">
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
                <h3>${this.getAttribute('name')}</h3>
                <p>${this.getAttribute('price')}</p>
                <button>Añadir al carrito</button>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

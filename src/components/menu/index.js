import React, { Component } from 'react';

import './styles.css';

export default class Menu extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'X-TUDO',
                description: 'Sanduíche com carne, bacon, salada, maionese e molho de tomate',
                price: 'R$10,00'
            },
            {
                id: 2,
                name: 'X-SALADA',
                description: 'Sanduíche de salada',
                price: 'R$10,00'
            },
            {
                id: 3,
                name: 'X-BACON',
                description: 'Sanduíche de Bacon',
                price: 'R$10,00'
            }
        ]
    }

    render() {

        const { products } = this.state;

        return (
            <div className="product-list">
                {
                    products.map(product => (
                        <article key={product.id}>
                            <strong>{product.name}</strong>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </article>
                    ))
                }
            </div>
        );
    }
}
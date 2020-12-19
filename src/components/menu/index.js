import React, { Component } from 'react';

import './styles.css';

export default class Menu extends Component {

    state = {
        products: [
            {
                id: 0001,
                name: 'X-TUDO',
                description: 'Sanduíche com carne, bacon, salada, maionese e molho de tomate'
            },
            {
                id: 0002,
                name: 'X-SALADA',
                description: 'Sanduíche de salada'
            },
            {
                id: 0003,
                name: 'X-BACON',
                description: 'Sanduíche de Bacon'
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
                        </article>
                    ))
                }
            </div>
        );
    }
}
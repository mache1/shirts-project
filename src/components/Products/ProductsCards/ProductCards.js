import { useState } from 'react';

import './ProductCards.scss';

import ProductCard from './ProductCard/ProductCard';

const ProductCards = (props) => {
    const [products] = useState([
        {
            id: 0,
            name: 'Bucket T-Shirt',
            image: 'product-shirt1.jpg',
            price: 15,
        },
        {
            id: 1,
            name: 'Triangle T-Shirt',
            image: 'product-shirt2.jpg',
            price: 12.5,
        },
        {
            id: 2,
            name: 'Panda T-Shirt',
            image: 'product-shirt3.jpg',
            price: 10,
        }
    ]);

    const productCards = products.map(product => {
        return <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image}
            price={product.price.toFixed(1)} />
    });

    return (
        <div className="product-cards">
            {productCards}
        </div>
    );
}

export default ProductCards;
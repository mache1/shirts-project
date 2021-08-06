import './Products.scss';

import ProductCards from './ProductsCards/ProductCards';

const Products = (props) => {
    return (
        <div className="products">
            <h1>Check out our products</h1>
            <ProductCards />
        </div>
    );
}

export default Products;
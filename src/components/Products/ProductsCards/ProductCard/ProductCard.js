import './ProductCard.scss';

import { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../../store/actions';
import Modal from '../../../Modal/Modal';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = (props) => {
    const [modal, setModal] = useState(false);

    const randomId = (length) => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
        if (!length)
            length = Math.floor(Math.random() * chars.length);
        let str = '';
        for (let i = 0; i < length; i++)
            str += chars[Math.floor(Math.random() * chars.length)];
        return str;
    }

    const showModal = () => {
        setModal(true);
        window.setTimeout(() => {
            setModal(false);
        }, 1000);
    }

    return (
        <div className="product-card">
            <h1 className="product__name">{props.name}</h1>
            <LazyLoadImage src={require(`../../../../assets/${props.image}`).default} alt={props.name} effect="blur" />
            <div className="product-info">
                <p className="price">Price: <span>$</span>{props.price}</p>

                <button onClick={() => {
                    showModal();
                    props.addToCart({
                        id: `CI_${randomId(10)}`,
                        name: props.name,
                        price: props.price,
                        image: props.image
                    });
                }}>Add To Cart</button>
            </div>
            <Modal show={modal}><i className="fas fa-shopping-cart"></i> Item is added to cart!</Modal>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (value) => dispatch({ type: actions.addToCart, value: value })
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);
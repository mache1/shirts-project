import './YourCart.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems/CartItems';
import { useHistory } from 'react-router';
import { actions } from '../../store/actions';
import Modal from '../Modal/Modal';
import { database } from '../../firebase';

const YourCart = (props) => {
    const [modal, setModal] = useState(false);
    const history = useHistory();

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

    let items =
        <>
            <h2 >Empty...</h2>
            <h2 key="dds">Add items to your cart. <i className="fas fa-cart-plus"></i></h2>
        </>;

    let totalPrice = 0;
    props.cart.forEach(i => totalPrice += Number(i.price));

    const submitorder = () => {
        if (props.userInfo === null)
            return history.push('/login');

        const orderData = {
            id: `ORD_${randomId(10)}`,
            email: props.userInfo.email,
            totalPrice: totalPrice.toFixed(1),
            items: props.cart,
            date: Date.now()
        }

        props.setOrderInfo(orderData);
        database.ref('orders').push(orderData);

        showModal();
        props.clearCart();
    }

    if (props.cart.length > 0) {
        items =
            <>
                <CartItems />
                <p className="total-price">Total Price: <span>${totalPrice.toFixed(1)}</span></p>
                <button className="order" onClick={submitorder}>ORDER</button>
            </>;
    }

    return (
        <div className="your-cart">
            <h1>Your Cart</h1>
            {items}
            <Modal show={modal}>ORDER SUBMITTED</Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        userInfo: state.userInfo,
        orderInfo: state.orderInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOrderInfo: (value) => dispatch({ type: actions.setOrderInfo, value: value }),
        clearCart: () => dispatch({ type: actions.clearCart })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCart);
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';

const CartItems = (props) => {
    const cartItems = props.cart.map(cartItem => {
        return <CartItem
            key={cartItem.id}
            name={cartItem.name}
            image={cartItem.image}
            id={cartItem.id}
            price={cartItem.price} />
    });

    return (
        <div className="cart-items">
            {cartItems}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartItems);
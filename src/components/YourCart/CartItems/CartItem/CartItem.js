import './CartItem.scss';
import { connect } from 'react-redux';
import { actions } from '../../../../store/actions';

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <i className="fas fa-times" onClick={() => props.removeFromCart(props.id)}></i>
            <p className="cart-item__price">${props.price}</p>
            <p className="cart-item__name">{props.name}</p>
            <img className="cart-item__image" src={require(`../../../../assets/${props.image}`).default} alt={props.name} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch({ type: actions.removeFromCart, id: id })
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
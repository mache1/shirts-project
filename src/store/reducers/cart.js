import { actions } from "../actions";

const cartReducer = (cart = [], action) => {
    switch (action.type) {
        case actions.addToCart:
            return cart.concat(action.value);

        case actions.removeFromCart:
            let arr = cart.filter(item => item.id !== action.id);
            return cart = arr;

        case actions.clearCart:
            return cart = [];

        default: return cart;
    }
}

export default cartReducer;
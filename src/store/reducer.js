import { actions } from "./actions";

const initialState = {
    cart: [],
    userInfo: null,
    orderInfo: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.addToCart:
            return {
                ...state,
                cart: state.cart.concat(action.value)
            }
        case actions.removeFromCart:
            let arr = state.cart.filter(item => item.id !== action.id);
            return {
                ...state,
                cart: arr
            }
        case actions.clearCart:
            return {
                ...state,
                cart: []
            }
        case actions.setUserInfo:
            return {
                ...state,
                userInfo: action.value
            }
        case actions.clearUserInfo:
            return {
                ...state,
                userInfo: null
            }
        case actions.setOrderInfo:
            return {
                ...state,
                orderInfo: action.value
            }
        case actions.clearOrderInfo:
            return {
                ...state,
                orderInfo: null
            }
        default:
            return state;
    }
}

export default reducer;
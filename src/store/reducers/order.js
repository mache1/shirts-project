import { actions } from "../actions";

const orderReducer = (orderInfo = null, action) => {
    switch (action.type) {
        case actions.setOrderInfo:
            return orderInfo = action.value;

        case actions.clearOrderInfo:
            return orderInfo = null;

        default: return orderInfo;
    }
}

export default orderReducer;
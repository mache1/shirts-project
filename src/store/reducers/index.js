import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart";
import userReducer from "./user";
import orderReducer from "./order";

import { combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['userInfo']
};

const reducer = combineReducers({
    cart: cartReducer,
    userInfo: userReducer,
    orderInfo: orderReducer
});

export default persistReducer(persistConfig, reducer);
import { actions } from "../actions";

const userReducer = (userInfo = null, action) => {
    switch (action.type) {
        case actions.setUserInfo:
            return userInfo = action.value;

        case actions.clearUserInfo:
            return userInfo = null;

        default: return userInfo;
    }
}

export default userReducer;
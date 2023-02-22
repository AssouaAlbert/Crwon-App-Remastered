import { SHOP_ACTION_TYPES } from "../actions/shop.action";

const INITIAL_STATE = { shopData: {}};

export const shopReducer = (prevState = INITIAL_STATE, action: Object) => {
    const { type, payload } = action;
    switch (type) {
        case SHOP_ACTION_TYPES.SET_SHOP_MAP :
            return {
                ...prevState,
                shopData: payload
            }
        default:
            // return new Error(`Unhandled type ${type} in reducer function`);
            return prevState
    }

}

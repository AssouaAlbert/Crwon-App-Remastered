import { SHOP_ACTION_TYPES } from "../types/shop.types";

const INITIAL_STATE = {
    shopData: [],
    isLoading: false,
    error: null
};

export const shopReducer = (prevState = INITIAL_STATE, action: Object) => {
    const { type, payload } = action;
    switch (type) {
        case SHOP_ACTION_TYPES.FETCH_SHOP_START:
            return {...prevState, isLoading: true}
        case SHOP_ACTION_TYPES.FETCH_SHOP_SUCCESS:
            return {
                ...prevState,
                shopData: payload,
                isLoading: false
            }
        case SHOP_ACTION_TYPES.FETCH_SHOP_FAILURE:
            return {
                ...prevState,
                error: payload,
                isLoading: false
            }
        default:
            // return new Error(`Unhandled type ${type} in reducer function`);
            return prevState
    }

}

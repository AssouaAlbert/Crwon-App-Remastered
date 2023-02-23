import { CART_DROP_DOWN_ACTIONS } from "../types/cartDropDown.types";

const INITIAL_STATE = {
    dropdown: false,
    cartItems: [],
};

export const cartDropDownReducer = (prevState = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS:
            return {
                ...prevState,
                cartItems: payload,
            };
        case CART_DROP_DOWN_ACTIONS.SET_IS_CART_OPEN:
            return {
                ...prevState,
                dropdown: payload,
            };
        default:
            return prevState
    }
}
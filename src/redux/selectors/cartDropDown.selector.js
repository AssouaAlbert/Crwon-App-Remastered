import { createSelector } from "reselect";

const selectcartDropDownReducer = (state) => {
    return state.cartDropDown
}

export const selectCartItems = createSelector(
    [selectcartDropDownReducer],
    (cart) => {
        return cart.cartItems
    }
);
export const selectCartDropDown = createSelector(
    [selectcartDropDownReducer],
    (cart) => {
        return cart.dropdown
    }
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cart) => {
        return cart.reduce((total, product) => total + product.quantity,
            0)
    }
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cart) => {
        return cart.reduce((total, product) => total + (product.price * product.quantity),
        0)
    }
)

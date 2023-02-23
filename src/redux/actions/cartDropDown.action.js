import { CART_DROP_DOWN_ACTIONS } from "../types/cartDropDown.types";

export const setDropdown = (dropdown) => {
    const dropdownSwitch = !dropdown;
    return {type: CART_DROP_DOWN_ACTIONS.SET_IS_CART_OPEN, payload: dropdownSwitch}
}

export const removeItemToCart = (cartItems, productToRemove) => {
    const setCartItems = (prevCart = cartItems) => {
        const existingCartItem = prevCart.find((product) => {
            return productToRemove.id === product.id;
        })
        if (existingCartItem.quantity > 1) {
            return prevCart.map((item) => {
                if (productToRemove.id === item.id) {
                    return { ...productToRemove, quantity: productToRemove.quantity - 1 };
                }
                return item;
            })
        }
        else {
            return prevCart.filter(product => {
                return product.id !== productToRemove.id;
            })
        }
    }
    return {type: CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS, payload: setCartItems()};
}
export const addCartItems = (cartItems, productToAdd) => {
    const setCartItems = (prevCart = cartItems) => {
        const existingCartItem = prevCart.find((product) => {
            return productToAdd.id === product.id;
        })
        if (existingCartItem) {
            return prevCart.map(product => {
                return product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product;
            })
        }
        return [...prevCart, { ...productToAdd, quantity: 1 }];
    }
    return {type: CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS, payload: setCartItems()};
}
export const clearItemFromCart = (cartItems, productToClear) => {
    const setCartItems = (prevCart = cartItems) => {
        const existingCartItem = prevCart.find((product) => {
            return productToClear.id === product.id;
        })
        if (existingCartItem) {
            return prevCart.filter(product => {
                return product.id !== productToClear.id;
            })
        }
    }
    return {type: CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS, payload: setCartItems()};
}

import { createContext, useReducer } from 'react';



export const CartDropDownContext = createContext({
    dropdown: false,
    setDropdown: () => { },
    cartItems: [],
    addCartItems: () => { },
    removeItemToCart: () => { },
    clearItemFromCart: () => { },
    totalCartItems: 0,
    totalCost: 0
});

const CART_DROP_DOWN_ACTIONS = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
}

const CartDropDownReducer = (prevState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS:
            return {
                ...prevState,
                ...payload,
            };
        case CART_DROP_DOWN_ACTIONS.SET_IS_CART_OPEN:
            return {
                ...prevState,
                ...payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartDropDownProvider = ({ children }) => {
    const [cartDropDownState, cartDropDownDispatch] = useReducer(CartDropDownReducer, {
        dropdown: false,
        cartItems: [],
        totalCartItems: 0,
        totalCost: 0,
        setDropdown: () => { }
    });
    const { totalCost, totalCartItems, cartItems, dropdown } = cartDropDownState;
    // const [dropdown, setDropdown] = useState(false);


    const updateCartItemsReducer = (cartItems) => {
        const newTotalCartItems = cartItems.reduce((total, product) => total + product.quantity,
            0)
        const newTotaCost = cartItems.reduce((total, product) => total + (product.price * product.quantity),
            0)

        const payload = {
            cartItems,
            totalCartItems: newTotalCartItems,
            totalCost: newTotaCost
        }
        cartDropDownDispatch({ type: CART_DROP_DOWN_ACTIONS.SET_CART_ITEMS, payload });
    }

    const removeItemToCart = (productToRemove) => {
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
        updateCartItemsReducer(setCartItems());
    }
    const addCartItems = (productToAdd) => {
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
        updateCartItemsReducer(setCartItems());
    }
    const clearItemFromCart = (productToClear) => {
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
        updateCartItemsReducer(setCartItems());
    }
    const setDropdown = (dropdown) => {
        const payload = {
            dropdown: !dropdown,
        }
        cartDropDownDispatch({ type: CART_DROP_DOWN_ACTIONS.SET_IS_CART_OPEN, payload });
    }



    return (
        <CartDropDownContext.Provider value={{ dropdown, setDropdown, addCartItems, removeItemToCart, clearItemFromCart, cartItems, totalCost, totalCartItems }}>
            {children}
        </CartDropDownContext.Provider>
    )
}
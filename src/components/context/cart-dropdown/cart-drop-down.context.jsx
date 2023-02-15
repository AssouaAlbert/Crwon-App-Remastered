import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartitems, productToAdd) => {

    return [...cartitems, { ...productToAdd, quantity: 1 }]
}

export const CartDropDownContext = createContext({
    dropdown: false,
    setDropdown: () => { },
    cartItems: [],
    addCartItems: () => { },
    removeItemToCart: () => { },
    totalCartItems: 0,
    totalCost: 0
});

export const CartDropDownProvider = ({ children }) => {
    const [dropdown, setDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, settotalCartItems] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const removeItemToCart = (productToRemove) => {
        setCartItems(prevCart => {
            const existingCartItem = prevCart.find((product) => {
                return productToRemove.id == product.id;
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
                    return product.id != productToRemove.id;
                })
            }
        })
    }
    const addCartItems = (productToAdd) => {
        setCartItems(prevCart => {
            const existingCartItem = prevCart.find((product) => {
                return productToAdd.id == product.id;
            })
            if (existingCartItem) {
                return prevCart.map(product => {
                    return product.id == productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product;
                })
            }
            return [...prevCart, { ...productToAdd, quantity: 1 }];
        })
    }
    const clearItemFromCart = (productToClear) => {
        setCartItems(prevCart => {
            const existingCartItem = prevCart.find((product) => {
                return productToClear.id == product.id;
            })
            if (existingCartItem) {
                return prevCart.filter(product => {
                    return product.id != productToClear.id;
                })
            }
        })
    }
    useEffect(() => {
        const newTotalCartItems = cartItems.reduce((total, product) => total+product.quantity,
        0)
        settotalCartItems(prevTotalCartItems => newTotalCartItems)
    }, [cartItems])
    useEffect(() => {
        const newTotaCost = cartItems.reduce((total, product) => total+(product.price * product.quantity),
        0)
        setTotalCost(prevTotalCost => newTotaCost)
    }, [cartItems])


    return (
        <CartDropDownContext.Provider value={{ dropdown, setDropdown, addCartItems, removeItemToCart, clearItemFromCart, cartItems, totalCost, totalCartItems }}>
            {children}
        </CartDropDownContext.Provider>
    )
}
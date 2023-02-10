import { createContext, useState } from 'react';

const addCartItem = (cartitems, productToAdd) => {

    return [...cartitems, { ...productToAdd, quatity: 1 }]
}

export const CartDropDownContext = createContext({
    dropdown: false,
    setDropdown: () => { },
    cartItems: [],
    addCartItems: () => { },
    totalCartItems: 0
});

export const CartDropDownProvider = ({ children }) => {
    const [dropdown, setDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, settotalCartItems] = useState(0);
    const addCartItems = (productToAdd) => {
        setCartItems(prevCart => {
            const existingCartItem = prevCart.find((product) => {
                return productToAdd.id == product.id;
            })
            if(existingCartItem) {
                return prevCart.map(product => {
                    return product.id == productToAdd.id? {...product, quatity: product.quatity + 1}:product;
                })
            }
            return [...prevCart, { ...productToAdd, quatity: 1 }];
        })
        settotalCartItems(prevValue => prevValue+1)
    }
    return (
        <CartDropDownContext.Provider value={{ dropdown, setDropdown, addCartItems, cartItems, totalCartItems }}>
            {children}
        </CartDropDownContext.Provider>
    )
}
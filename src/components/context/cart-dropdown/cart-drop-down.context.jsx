import { createContext, useState } from 'react';

export const CartDropDownContext = createContext({ dropdown: false });

export const CartDropDownProvider = ({ children }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <CartDropDownContext.Provider value={{dropdown, setDropdown}}>
            {children}
        </CartDropDownContext.Provider>
    )
}
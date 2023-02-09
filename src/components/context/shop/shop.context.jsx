import { useState, createContext, useEffect } from "react";
import SHOP_DATA from '../../../utilities/shop/shop.data.json';
export const ShopContext = createContext({shopData:[]});

export const ShopProvider = ({children}) => {
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
            setShopData((prevData)=> SHOP_DATA);
    }, [])
    return (
        <ShopContext.Provider value={{shopData, setShopData}}>
            {children}
        </ShopContext.Provider>
    )
}
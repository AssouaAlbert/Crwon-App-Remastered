import { useState, createContext, useEffect } from "react";
import SHOP_DATA from '../../../utilities/shop/shop.data.js';
import { addCollectionAndDocuements } from "../../../utilities/firebase/firebase.database.js";
export const ShopContext = createContext({ shopData: [] });

export const ShopProvider = ({ children }) => {
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
        addCollectionAndDocuements('collections', SHOP_DATA )
        setShopData((prevData) => SHOP_DATA);
    }, [])
    return (
        <ShopContext.Provider value={{ shopData, setShopData }}>
            {children}
        </ShopContext.Provider>
    )
}
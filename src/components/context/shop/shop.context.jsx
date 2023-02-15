import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utilities/firebase/firebase.database.js";
export const ShopContext = createContext({ shopData: {}});

export const ShopProvider = ({ children }) => {
    const [shopData, setShopData] = useState({});
    useEffect(() => {
        (async ()=> {
            const collections = await getCategoriesAndDocuments();
            setShopData((prevData) => collections);
        })()
    }, [])
    return (
        <ShopContext.Provider value={{ shopData, setShopData }}>
            {children}
        </ShopContext.Provider>
    )
}
import { SHOP_ACTION_TYPES } from "../types/shop.types"; 
export const setShopData = (collectionsArray) => {
    return { type: SHOP_ACTION_TYPES.SET_SHOP, payload: collectionsArray };
}

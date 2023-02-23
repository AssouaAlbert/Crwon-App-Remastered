import { SHOP_ACTION_TYPES } from "../../actions/shop.action"; 
export const setShopData = (collectionsArray) => {
    return { type: SHOP_ACTION_TYPES.SET_SHOP, payload: collectionsArray };
}

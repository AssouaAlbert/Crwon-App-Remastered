import { SHOP_ACTION_TYPES } from "../types/shop.types"; 
export const setShopData = (collectionsArray) => {
    return { type: SHOP_ACTION_TYPES.SET_SHOP, payload: collectionsArray };
}


export const fetchShopDataStart = () => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_START} };

export const fetchShopDataSuccess = (collectionsArray) => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_SUCCESS, payload: collectionsArray} };

export const fetchShopDataFailure = (error) => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_FAILURE, payload: error} };


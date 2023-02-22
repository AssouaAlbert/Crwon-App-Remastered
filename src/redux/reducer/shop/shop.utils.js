import { SHOP_ACTION_TYPES } from "../actions/shop.action"; 
export const setShopData = (shop) => {
    return { type: SHOP_ACTION_TYPES.SET_SHOP_MAP, payload: shop };
}

export const selectShopData = (state)=> {
    return state.shop.shopData
};
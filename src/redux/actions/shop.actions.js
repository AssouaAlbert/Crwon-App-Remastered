import { SHOP_ACTION_TYPES } from "../types/shop.types"; 
import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.database";
export const setShopData = (collectionsArray) => {
    return { type: SHOP_ACTION_TYPES.SET_SHOP, payload: collectionsArray };
}


export const fetchShopDataStart = () => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_START} };

export const fetchShopDataSuccess = (collectionsArray) => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_SUCCESS, payload: collectionsArray} };

export const fetchShopDataFailure = (error) => { return {type: SHOP_ACTION_TYPES.FETCH_SHOP_FAILURE, payload: error} };

export const fetchShopDataAsync = () => async(dispatch) => {
    dispatch(fetchShopDataStart());
    try {
        const collectionsArray = await getCategoriesAndDocuments();
        dispatch(fetchShopDataSuccess(collectionsArray));
    } catch (error) {
        dispatch(fetchShopDataFailure(error));
    }
}
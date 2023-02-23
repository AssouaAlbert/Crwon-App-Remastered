import { combineReducers } from 'redux';

import { userReducer } from './user.reducer';
import { shopReducer } from './shop.reducer';
import { cartDropDownReducer } from './cartDropDown.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    cartDropDown: cartDropDownReducer
});
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { shopReducer } from './shop/shop.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer
});
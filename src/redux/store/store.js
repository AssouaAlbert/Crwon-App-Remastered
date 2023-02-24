import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger'

import { rootReducer } from "../reducer/root-reducer";
// import persistReducer from "redux-persist/es/persistReducer";



const persistCofig = {
    key: 'root',
    storage,
    blacklist: ['user']
};
const persistedReducer = persistReducer(persistCofig, rootReducer)
const middleWares = [logger]
const composeEnhancer = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancer);
export const persistor = persistStore(store);
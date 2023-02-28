import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
// import thunk from "redux-thunk";
//! You only want one async side effect library (Sagas replace thunks) 
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "../reducer/root-reducer";
import { rootSaga } from "../../redux-saga/root-saga";
// import persistReducer from "redux-persist/es/persistReducer";


const sagaMiddleWare = createSagaMiddleware();
const persistCofig = {
    key: 'root',
    storage,
    blacklist: ['user'],
    whiteList: ['cartDropDown']
};
const persistedReducer = persistReducer(persistCofig, rootReducer)
// const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleWare].filter(Boolean)
const composeEnhancer = (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const composeEnhancers = composeEnhancer((applyMiddleware(...middleWares)));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
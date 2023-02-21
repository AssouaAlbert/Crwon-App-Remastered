import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'

import { rootReducer } from "../reducer/root-reducer";

const middleWares = [logger]
const composeEnhancer = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancer);
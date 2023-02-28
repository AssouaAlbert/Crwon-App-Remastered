import {all, call} from "redux-saga/effects";
import { shopSaga } from "./sagas/shop.saga";
export function* rootSaga() {
yield all([call(shopSaga)])
}
import {all, call} from "redux-saga/effects";
import { shopSaga } from "./sagas/shop.saga";
import { userSaga } from "./sagas/user.saga";
export function* rootSaga() {
yield all([call(shopSaga), call(userSaga)])
}
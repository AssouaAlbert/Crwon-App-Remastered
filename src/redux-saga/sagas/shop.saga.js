import { takeLatest, all, call, put } from 'redux-saga/effects';

/*
//* takeLatest: Each time an action is dispatched to the store. And if this action matches pattern, takeLatest starts a new saga task in the background. If a saga task was started previously (on the last action dispatched before the actual action), and if this task is still running, the task will be cancelled.
//* put: Dispatch an action to the Store.
//* all: Instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.
//* call: Instructs the middleware to call the function fn with args as arguments.
*/

import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.database';
import { fetchShopDataFailure, fetchShopDataSuccess } from '../../redux/actions/shop.actions';
import { SHOP_ACTION_TYPES } from '../../redux/types/shop.types';


export function* fetchShopDataAsync() {
    try {
        // Generators are the foundations for async await, you can't have sync await in generator functions
        // const collectionsArray = await getCategoriesAndDocuments();
        const collectionsArray = yield call(getCategoriesAndDocuments, 'collection');
        // dispatch(fetchShopDataSuccess(collectionsArray));
        yield put(fetchShopDataSuccess(collectionsArray));
    } catch (error) {
        yield put(fetchShopDataFailure(error));
        // dispatch(fetchShopDataFailure(error));
    }
}

export function* onFetchShopStart() {
    //Run only the latest action call of this type. Ignore the rest/previous and run the function (second arg)
    yield takeLatest(SHOP_ACTION_TYPES.FETCH_SHOP_START, fetchShopDataAsync)
}

export function* shopSaga() {
    // all runs all the functions in the array
    yield all([call(onFetchShopStart)])
}
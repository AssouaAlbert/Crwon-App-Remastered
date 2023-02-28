import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from '../../redux/types/user.types';
import { getCurrentUser } from '../../utilities/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';
import {
    emailSignInSuccess,
    signInFailure
} from '../../redux/actions/user.actions';


export function* getUserSnapshotFromAuth(userAuth, extraFields) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, extraFields)
        console.log('userSnapshot:', userSnapshot);
        console.log('userSnapshot:', userSnapshot.data());
        yield put(emailSignInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* fetchUserAsync() {
    try {
        // Generators are the foundations for async await, you can't have sync await in generator functions
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getUserSnapshotFromAuth, userAuth);
        // yield put(emailSignInSuccess(user));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onFetchUserStart() {
    //Run only the latest action call of this type. Ignore the rest/previous and run the function (second arg)
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, fetchUserAsync)
}

export function* userSaga() {
    // all runs all the functions in the array
    yield all([call(onFetchUserStart)])
}
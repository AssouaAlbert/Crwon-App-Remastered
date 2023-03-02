import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from '../../redux/types/user.types';
import { getCurrentUser } from '../../utilities/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';

import { signInWithGooglePopup, SignInUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
import {
    signInSuccess,
    signInFailure
} from '../../redux/actions/user.actions';


export function* getUserSnapshotFromAuth(userAuth, extraFields) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, extraFields)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* fetchUserAsync() {
    try {
        // Generators are the foundations for async await, you can't have sync await in generator functions
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getUserSnapshotFromAuth, userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* googleSignInAsync() {
    try {
        console.log("object")
        const userAuthResponse = yield call(signInWithGooglePopup);
        const { user } = userAuthResponse;
        yield call(getUserSnapshotFromAuth, user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* emailSignInAsync({payload: {email, password}}) {
    try {
        const userAuthResponse = yield call(SignInUserWithEmailAndPassword, email, password);
        const { user } = userAuthResponse;
        yield call(getUserSnapshotFromAuth, user);
        // const { user } = await SignInUserWithEmailAndPassword(email, password);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSingInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,emailSignInAsync);
}
export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignInAsync);
}
export function* onFetchUserStart() {
    //Run only the latest action call of this type. Ignore the rest/previous and run the function (second arg)
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, fetchUserAsync);
}

export function* userSaga() {
    // all runs all the functions in the array
    yield all([call(onFetchUserStart), call(onGoogleSignInStart), call(onEmailSingInStart)])
}
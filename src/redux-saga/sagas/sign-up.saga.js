import { takeLatest, all, call, put } from 'redux-saga/effects';

import { createAutheticateUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';
import { USER_ACTION_TYPES } from '../../redux/types/user.types';
import { signUpFailure, emailSignInSuccess } from '../../redux/actions/user.actions';


export function* signUpAsync({ payload: { email, password, displayName } }) {

    try {
        console.log("object")
        const userResponseAuth = yield call( createAutheticateUserWithEmailAndPassword, email, password);
        const { user } = userResponseAuth;
        const userSnapshot = yield call(createUserDocumentFromAuth,user, { displayName });
        yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUp() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpAsync);
}

export function* signUpSaga() {
    yield all([call(onSignUp)])
}
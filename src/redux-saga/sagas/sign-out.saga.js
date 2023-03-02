import { takeLatest, all, call, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "../../redux/types/user.types";
import { signOutFailure, signOutSuccess } from "../../redux/actions/user.actions";
import { signOutUser } from "../../utilities/firebase/firebase.auth";

export function* signOutAsync() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}
export function* onSignOut() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutAsync);
}

export function* signOutSaga () {
    yield all([call(onSignOut)])
}


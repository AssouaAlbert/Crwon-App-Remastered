import { USER_ACTION_TYPES } from "../types/user.types";
export const setCurrentUser = (user) => {
    return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
}

export const checkUserSession = () => { return { type: USER_ACTION_TYPES.CHECK_USER_SESSION }; }
export const googleSignInStart = () => { return { type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START }; }
export const emailSignInStart = (email, password) => { return { type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: { email, password } }; }
export const emailSignInSuccess = (user) => { return { type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user }; }
export const signInFailure = (error) => { return { type: USER_ACTION_TYPES.SIGN_IN_FAILURE, payload: error }; }
export const signUpStart = (email, password, displayName) => { return { type: USER_ACTION_TYPES.SIGN_UP_START, payload: {email, password, displayName} }; }
export const signUpSuccess = (user, extrafields = {}) => { return { type: USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload:{user, extrafields} }; }
export const signUpFailure = (error) => { return { type: USER_ACTION_TYPES.SIGN_UP_FAILURE, payload: error }; }
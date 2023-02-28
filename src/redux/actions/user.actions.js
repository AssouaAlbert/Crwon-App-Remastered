import { USER_ACTION_TYPES } from "../types/user.types";
export const setCurrentUser = (user) => {
    return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
}

export const checkUserSession = () => { return { type: USER_ACTION_TYPES.CHECK_USER_SESSION }; }
export const googleSignInStart = () => { return { type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START }; }
export const emailSignInStart = (email, password) => { return { type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: { email, password } }; }
export const emailSignInSuccess = (user) => { return { type: USER_ACTION_TYPES.SIGN_IN_FAILURE, payload: user }; }
export const signInFailure = (error) => { return { type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: error }; }
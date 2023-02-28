import { USER_ACTION_TYPES } from "../types/user.types";
/*
SET_CURRENT_USER: 'SET_CURRENT_USER',
CHECK_USER_SESSION:'CHECK_USER_SESSION',
GOOGLE_SIGN_IN_START:'GOOGLE_SIGN_IN_START',
EMAIL_SIGN_IN_START:'EMAIL_SIGN_IN_START',
SIGN_IN_SUCCESS:'SIGN_IN_SUCCESS',
SIGN_IN_FAILURE:'SIGN_IN_FAILURE', 
*/

const INITIAL_STATE = { currentUser: null, isLoading: false, error: null };
export const userReducer = (prevState = INITIAL_STATE, action: Object) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.CHECK_USER_SESSION:
            return {
                ...prevState,
            }
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: payload
            }
        case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
            return {
                ...prevState,
                isLoading: true
            }
        case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
            return {
                ...prevState,
                isLoading: true
            }
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            return {
                ...prevState,
                error: payload
            }
        default:
            // return new Error(`Unhandled type ${type} in reducer function`);
            return prevState
    }

}

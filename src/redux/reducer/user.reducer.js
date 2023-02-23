import { USER_ACTION_TYPES } from "../types/user.types"; 

const INITIAL_STATE = { currentUser: null };
export const userReducer = (prevState = INITIAL_STATE, action: Object) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: payload
            }
        default:
            // return new Error(`Unhandled type ${type} in reducer function`);
            return prevState
    }

}

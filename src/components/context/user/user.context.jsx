import '../../../utilities/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../../utilities/firebase/firebase.database';
import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener } from '../../../utilities/firebase/firebase.auth';

export const UserContext = createContext({ currentUser: null, setCurrentUser: () => null });

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const reducerFxn = (prevState, action: Object) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: payload
            }
        default:
            return new Error(`Unhandled type ${type} in reducer function`);
    }

}

export const UserProvider = ({ children }) => {
    const [userState, userStateDispatch] = useReducer(reducerFxn, { currentUser: null });
    const { currentUser } = userState;
    const setCurrentUser = (user) => {
        userStateDispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }
    // Use reducer 
    // const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            //! If a user is logged in/ created, then create or get the user profile from firestore
            if (user) { createUserDocumentFromAuth(user) }
            setCurrentUser(user)
        });
        return unsubscribe;
    }, [])
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}
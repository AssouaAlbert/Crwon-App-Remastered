// import '../../../utilities/firebase/firebase.utils';
// import { createUserDocumentFromAuth } from '../../../utilities/firebase/firebase.database';
// import { createContext, useEffect, useReducer } from 'react';
// import { onAuthStateChangedListener } from '../../../utilities/firebase/firebase.auth';

// export const UserContext = createContext({ currentUser: null, setCurrentUser: () => null });

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER',
// }

// const INITIAL_STATE = { currentUser: null };
// const reducerFxn = (prevState, action: Object) => {
//     const { type, payload } = action;
//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...prevState,
//                 currentUser: payload
//             }
//         default:
//             return new Error(`Unhandled type ${type} in reducer function`);
//     }

// }

// export const UserProvider = ({ children }) => {
//     const [userState, userStateDispatch] = useReducer(reducerFxn, INITIAL_STATE);
//     const { currentUser } = userState;
//     // Use reducer 
//     // const [currentUser, setCurrentUser] = useState(null);

//     return (
//         <UserContext.Provider value={{ currentUser }}>
//             {children}
//         </UserContext.Provider>
//     )
// }
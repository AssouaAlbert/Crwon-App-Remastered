import '../../utilities/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';
import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../../utilities/firebase/firebase.auth';
export const UserContext = createContext({ currentUser: null, setCurrentUser: () => null });

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            //! If a user is logged in/ created, then create or get the user profile from firestore
            if(user) { createUserDocumentFromAuth(user)} 
            setCurrentUser(prevUser => user)
        });
    }, [])
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}
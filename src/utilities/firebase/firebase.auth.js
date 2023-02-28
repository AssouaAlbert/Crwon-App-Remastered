import { getAuth, signOut, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

/*----------------------- Authentication  -----------------------*/
const provider = new GoogleAuthProvider();
// e.g. const facebookProvider = new FacebookAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
const auth = getAuth();
const signInWithGooglePopup = async () => {
    return await signInWithPopup(auth, provider)
};
const signInWithGoogleRedirect = async () => {
    return await signInWithRedirect(auth, provider)
}

const createAutheticateUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        throw new Error('Passwords do not match');
    }
    try {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (e) {
        console.log('Error authenticatinng user, using email and password', e);
    }
}
const SignInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        throw new Error('Passwords do not match');
    }
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    }
    catch (e) {
        console.log('Error authenticatinng user, using email and password', e);
    }
}
const signOutUser = async () => {
    await signOut(auth).then(() => {

    }).catch((error) => {
        console.log(error.message)
    })
}

const onAuthStateChangedListener = (clb) => {
    return onAuthStateChanged(auth, clb)
}

const getCurrentUser = () => {
    return new Promise((res, rej) => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            // unsubscribe if/not there is a user
            unsubscribe();
            res(userAuth);
        }, rej) // this third arguement of onAuthStateChanged is used to handle errors 
    })
}

export { getCurrentUser, onAuthStateChangedListener, signOutUser, signInWithGooglePopup, signInWithGoogleRedirect, createAutheticateUserWithEmailAndPassword, SignInUserWithEmailAndPassword };
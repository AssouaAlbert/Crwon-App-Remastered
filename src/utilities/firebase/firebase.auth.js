import { getAuth, signOut, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

export {signOutUser, signInWithGooglePopup, signInWithGoogleRedirect, createAutheticateUserWithEmailAndPassword, SignInUserWithEmailAndPassword };
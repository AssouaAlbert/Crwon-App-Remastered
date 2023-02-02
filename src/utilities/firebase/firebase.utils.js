// Import the functions you need from the SDKs you need
//* Create and initialize instance of firebase app used to leverage and perform crud operation of the firebase
//*  project set up in firebase.google.com/console (note this is instance of firebase)
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    doc, //! Used to get an instance of a document in firestore
    getDoc, //! Used to get the data in the document above
    setDoc //! Used to get the data in the document above
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//* These are the configuration parameter used, shred, stored by the firebase app. 
const firebaseConfig = {
    apiKey: "AIzaSyAbf__HtEZuHchb20zaCHb_5Oo33IUk7Q8",
    authDomain: "clothing-shop-2b253.firebaseapp.com",
    databaseURL: "https://clothing-shop-2b253.firebaseio.com",
    projectId: "clothing-shop-2b253",
    storageBucket: "clothing-shop-2b253.appspot.com",
    messagingSenderId: "218376645684",
    appId: "1:218376645684:web:d348daab7eff0c273eee61",
    measurementId: "G-483F3KTLLF"
};

/*----------------------- Initialize Firebase -----------------------*/
const app = initializeApp(firebaseConfig);

/*----------------------- Authentication  -----------------------*/
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
const auth = getAuth();
const signInWithGooglePopup = async () => {
    return await signInWithPopup(auth, provider)
};

/*----------------------- Database  -----------------------*/
//Create and instance(snapshot) of the database/Firestore
const db = getFirestore();
const createUserDocuementFromAuth = async (userAuthResponse) => {
    //* In the instance/snapshot of the database;db, search for document; users using primarykey;userAuthResponse.uid
    //* And return ref to this record. If the record does not exist firebase creates a unique path/reference to this documents
    //! This is because the is no harm since not= conflickts are found

    const userRef = doc(db, 'users', userAuthResponse.uid);
    // Using this reference get the user data shapshot
    const userSnapshot = await getDoc(userRef);
    //If the user does not exist create a snapshop with data
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuthResponse;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                email,
                createdAt,
                displayName
            })
        }
        catch (error) {
            console.log('Error creating User', error.message)
        }
    }
    return userRef;
}

export { auth, signInWithGooglePopup, db, createUserDocuementFromAuth };
// Import the functions you need from the SDKs you need
//* Create and initialize instance of firebase app used to leverage and perform crud operation of the firebase
//*  project set up in firebase.google.com/console (note this is instance of firebase)
import { initializeApp } from "firebase/app";
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
export const app = initializeApp(firebaseConfig);

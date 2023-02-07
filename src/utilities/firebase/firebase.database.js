import {
    getFirestore,
    doc, //! Used to get an instance of a document in firestore
    getDoc, //! Used to get the data in the document above
    setDoc //! Used to get the data in the document above
} from 'firebase/firestore';

/*----------------------- Database  -----------------------*/
//Create and instance(snapshot) of the database/Firestore
const db = getFirestore();
const createUserDocumentFromAuth = async (userAuthResponse, extrafields = {}) => {
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
                displayName,
                ...extrafields
            })
        }
        catch (error) {
            console.log('DB Error creating User:', error.message)
        }
    }
    return userRef;
}

export {createUserDocumentFromAuth} ;
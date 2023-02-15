import {
    getFirestore,
    doc, //! Used to get an snapshot of a document in firestore
    getDoc, //! Used to get the data in the document above
    setDoc, //! Used to set the data in the document above
    collection, //! Used to get an snapshot of a collection in firestore
    writeBatch, //! Used to handle transactions in the firestore
} from 'firebase/firestore';

/*----------------------- Database  -----------------------*/
//Create and instance(snapshot) of the database/Firestore
const db = getFirestore();
//* Collection key is similar to the document key or primary key of that collection. e.g. users 
export const addCollectionAndDocuements = async (collectionKey, objectsToAdd) => {
    const collectionRef = await collection(db, collectionKey);
    const batch = writeBatch(db);
    await objectsToAdd.forEach(async (object) => {
        //! doc(collectionRef, object.title.toLowerCase());
        //* The above code is not different from doc(db, 'users', userAuthResponse.uid);
        //* Because, (db, 'users') === collectionRef (above, which returns the collection ref)
        const docRef = await doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })
    await batch.commit();
}



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

export { createUserDocumentFromAuth };
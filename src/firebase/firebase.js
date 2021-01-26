import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const dotenv = require('dotenv');
dotenv.config();

const devConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY_DEV,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL_DEV,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_DEV,
    appId: process.env.REACT_APP_FIREBASE_APP_ID_DEV,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID_DEV
};

const prodConfig = {};

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const getUserDocument = async uid => {
    if(!uid) return null;

    try{
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return{
            uid,
            ...userDocument.data()
        }
    } catch(err){
        console.error("Error fetching user", err);
    }
}

const generateUserDocument = async (user, additionalData) => {
    if(!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {fullName, userName, email, photoURL} = user;
        try{
            await userRef.set({
                fullName,
                userName,
                email,
                photoURL,
                ...additionalData
            });
        } catch(err){
            console.error("Error creating user document", err);
        }
    }

    return getUserDocument(user.uid);
}

export {auth, firestore, generateUserDocument};
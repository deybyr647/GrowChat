import app from 'firebase/app';

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

class Firebase{
    constructor(){
        app.initializeApp(config);
    }
}

export default Firebase;
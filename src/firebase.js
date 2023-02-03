// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from './firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Firestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw4zYAIkgJ5IxRosqa_E0wcN_3MBz0ftM",
    authDomain: "proyectoalpha-9bb45.firebaseapp.com",
    projectId: "proyectoalpha-9bb45",
    storageBucket: "proyectoalpha-9bb45.appspot.com",
    messagingSenderId: "1064051475631",
    appId: "1:1064051475631:web:c75f712c352242dfa9005a",
    measurementId: "G-4K0CSJ6RP6",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
///const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = app.firestore();
const db = Firestore(app);
const auth = firebase.auth();
export { db, auth };
export default firebase;
// Initialize Firebase
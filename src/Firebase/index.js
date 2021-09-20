// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/firebase-app";
import * as firebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyA_BWAjxbUtDjuR12oGYH0GnD6WPNMcdtk",
    authDomain: "react-project-655fe.firebaseapp.com",
    projectId: "react-project-655fe",
    storageBucket: "react-project-655fe.appspot.com",
    messagingSenderId: "8418339955",
    appId: "1:8418339955:web:5461b66c23e283dacf8e06"
};

initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;
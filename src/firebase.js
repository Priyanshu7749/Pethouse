// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjmU-legdt02b06NIc5-ocu2cn6vEqcNY",
    authDomain: "mycp3-b19ee.firebaseapp.com",
    projectId: "mycp3-b19ee",
    storageBucket: "mycp3-b19ee.appspot.com",
    messagingSenderId: "110805225847",
    appId: "1:110805225847:web:ab8afcde9e189c50765172"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

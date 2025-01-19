// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, SignInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import{getFirestore, setDoc, doc}  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC68mlgmAkqVCxf59jlOjVKLXQGAAGHOE",
  authDomain: "movie-114f6.firebaseapp.com",
  projectId: "movie-114f6",
  storageBucket: "movie-114f6.firebasestorage.app",
  messagingSenderId: "769618617255",
  appId: "1:769618617255:web:d6f321f9f635bb13350c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });




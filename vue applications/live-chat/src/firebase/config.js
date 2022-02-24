

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCk5Sc-H-7O2_1UQ6q4qRRHz7o3KlaPNTk",
  authDomain: "my-first-project-15a34.firebaseapp.com",
  projectId: "my-first-project-15a34",
  storageBucket: "my-first-project-15a34.appspot.com",
  messagingSenderId: "738706221300",
  appId: "1:738706221300:web:8af9c294e5ef05107b96a1"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

// Google login

const provider = new GoogleAuthProvider()


export { db, auth, provider }
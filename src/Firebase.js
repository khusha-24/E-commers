// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJIXrGgWhnJuE8RZP5Q9Z1N7WuMXHUL3M",
  authDomain: "react-firebase-2415.firebaseapp.com",
  projectId: "react-firebase-2415",
  storageBucket: "react-firebase-2415.appspot.com",
  messagingSenderId: "23069861828",
  appId: "1:23069861828:web:dfe56a13d9a2ab50ee6691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

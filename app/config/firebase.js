// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYKbYrrLmXoUHhRI5_sfbkxJLXg8UJSQQ",
  authDomain: "yourmoney-52bbd.firebaseapp.com",
  projectId: "yourmoney-52bbd",
  storageBucket: "yourmoney-52bbd.firebasestorage.app",
  messagingSenderId: "114479510570",
  appId: "1:114479510570:web:c9963ec70482dc618bbf53",
  measurementId: "G-Z8YP36TQ5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
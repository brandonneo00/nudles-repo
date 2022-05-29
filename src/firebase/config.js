import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC-A7M24GJTg7KiAZUAwJyrOpmBolqiPE",
  authDomain: "nudles-34610.firebaseapp.com",
  projectId: "nudles-34610",
  storageBucket: "nudles-34610.appspot.com",
  messagingSenderId: "973131582186",
  appId: "1:973131582186:web:68f4aed08fde925abba593",
  measurementId: "G-2H7ZB3WR9T",
};

// Initialising firebase
initializeApp(firebaseConfig);

// Initialising firestore
const db = getFirestore();

// Initialising firebase authentication
const auth = getAuth();

export { db, auth };

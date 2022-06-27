import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBC-A7M24GJTg7KiAZUAwJyrOpmBolqiPE",
//   authDomain: "nudles-34610.firebaseapp.com",
//   projectId: "nudles-34610",
//   storageBucket: "nudles-34610.appspot.com",
//   messagingSenderId: "973131582186",
//   appId: "1:973131582186:web:68f4aed08fde925abba593",
//   measurementId: "G-2H7ZB3WR9T",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCuqwIk_slQ9Vfe6NmJ793fenUwWEQCGe4",
  authDomain: "nudles-production.firebaseapp.com",
  projectId: "nudles-production",
  storageBucket: "nudles-production.appspot.com",
  messagingSenderId: "684133901094",
  appId: "1:684133901094:web:ad1c970916d893de0b17e7",
  measurementId: "G-LSJYKKGMX1"
};

// Initialising firebase
initializeApp(firebaseConfig);

// Initialising firestore
const db = getFirestore();

// Initialising firebase authentication
const auth = getAuth();

export { db, auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBynijMBTpMuk_R7b93qlOatS2aVOqEHsc",
  authDomain: "dicetools-b54b5.firebaseapp.com",
  projectId: "dicetools-b54b5",
  storageBucket: "dicetools-b54b5.appspot.com",
  messagingSenderId: "119703255150",
  appId: "1:119703255150:web:bdd9bc06856efe99788e7f",
  measurementId: "G-KXF95848E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && getAnalytics(app));
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

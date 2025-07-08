// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ97DkFXKPLvx9HsMvisdrVPzsJhTWq1w",
  authDomain: "fire-assignment-87ff8.firebaseapp.com",
  projectId: "fire-assignment-87ff8",
  storageBucket: "fire-assignment-87ff8.firebasestorage.app",
  messagingSenderId: "384499049463",
  appId: "1:384499049463:web:25e534ca6bf77596b484f2",
  measurementId: "G-4NGNRCT408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const fireDb = getFirestore(app);
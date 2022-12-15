// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1hPP0HkK-FXCLeIMJwy4R-Slqh3QWLj8",
  authDomain: "the-swan-house.firebaseapp.com",
  projectId: "the-swan-house",
  storageBucket: "the-swan-house.appspot.com",
  messagingSenderId: "1000637753618",
  appId: "1:1000637753618:web:bbe9d25e2250fecce92bcb",
  measurementId: "G-D3PPK9EYH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBhNXdp5y_TVvVxPt1xuoBDCrnzudg99w",
  authDomain: "chillflix-ccb9b.firebaseapp.com",
  projectId: "chillflix-ccb9b",
  storageBucket: "chillflix-ccb9b.appspot.com",
  messagingSenderId: "175710622474",
  appId: "1:175710622474:web:9945e6b7e8d606def8a0f3",
  measurementId: "G-F7RZR0N2W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
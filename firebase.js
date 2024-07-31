// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZn-9NhfvaM1Z8bOfPHrrf1rO1Vx74ZD8",
  authDomain: "inventory-management-sys-f1b17.firebaseapp.com",
  projectId: "inventory-management-sys-f1b17",
  storageBucket: "inventory-management-sys-f1b17.appspot.com",
  messagingSenderId: "19663567106",
  appId: "1:19663567106:web:a361b3db5530871c9faa1b",
  measurementId: "G-F5QKYPX1L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
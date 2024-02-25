// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9cHDGD-TwuD4XKqpX18kYDOvGHRLVCnE",
  authDomain: "netflixgpt-d6f26.firebaseapp.com",
  projectId: "netflixgpt-d6f26",
  storageBucket: "netflixgpt-d6f26.appspot.com",
  messagingSenderId: "777023125348",
  appId: "1:777023125348:web:7f071d0f45713f4304ac71",
  measurementId: "G-H7ZBYCBMQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
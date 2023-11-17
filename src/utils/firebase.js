// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKuJsY-wIPIz5tLF38OvUG7NNPZ_PjwmU",
  authDomain: "netfix-5e322.firebaseapp.com",
  projectId: "netfix-5e322",
  storageBucket: "netfix-5e322.appspot.com",
  messagingSenderId: "578568068565",
  appId: "1:578568068565:web:84645dc662eb84b9f0715c",
  measurementId: "G-ZHNLKX4123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
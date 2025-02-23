// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQ2VVxoCtQl6mzwPQpxuNgv9S2wYmYAQ",
  authDomain: "hidden-guide.firebaseapp.com",
  projectId: "hidden-guide",
  storageBucket: "hidden-guide.firebasestorage.app",
  messagingSenderId: "1078953216287",
  appId: "1:1078953216287:web:782e3041cc7bdd3d8e082a",
  measurementId: "G-SRF827DFP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
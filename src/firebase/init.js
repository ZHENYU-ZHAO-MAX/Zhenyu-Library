// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3NqodVCz_82X01CKuvo8ENqzFxmS4qY",
  authDomain: "fit5032-e85be.firebaseapp.com",
  projectId: "fit5032-e85be",
  storageBucket: "fit5032-e85be.firebasestorage.app",
  messagingSenderId: "481362696930",
  appId: "1:481362696930:web:dd1f5ae85a7bc385dcdcbb",
  measurementId: "G-9RG2C37NV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create Firestore
const db = getFirestore(app);
export { app, db };
// const analytics = getAnalytics(app);

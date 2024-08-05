// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sajilo-basobas.firebaseapp.com",
  projectId: "sajilo-basobas",
  storageBucket: "sajilo-basobas.appspot.com",
  messagingSenderId: "723608092709",
  appId: "1:723608092709:web:a1d7b905507590b4ab3fcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
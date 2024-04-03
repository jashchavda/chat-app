// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAhA2I8UAulm8WBeB8_ZUoiL-ZgSWjuxwY",
  authDomain: "chatapp-a3316.firebaseapp.com",
  projectId: "chatapp-a3316",
  storageBucket: "chatapp-a3316.appspot.com",
  messagingSenderId: "1046421612350",
  appId: "1:1046421612350:web:fa67f4f9a0bd7eb7686e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
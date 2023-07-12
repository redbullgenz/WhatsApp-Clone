// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp6ofJfX5NShR330SqBbrotBqhyVaVLVE",
    authDomain: "whatsapp-clone-68a21.firebaseapp.com",
    projectId: "whatsapp-clone-68a21",
    storageBucket: "whatsapp-clone-68a21.appspot.com",
    messagingSenderId: "1021811877168",
    appId: "1:1021811877168:web:98a74e80dbfa7e50b6d4f5",
    measurementId: "G-DMZLR0VE8L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app
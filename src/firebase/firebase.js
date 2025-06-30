

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBjvoch_OxN4gPk7O6SXsFklaF7cXMSXJE",
  authDomain: "task-manager-app-e83fc.firebaseapp.com",
  projectId: "task-manager-app-e83fc",
  storageBucket: "task-manager-app-e83fc.firebasestorage.app",
  messagingSenderId: "1048286246411",
  appId: "1:1048286246411:web:1b19ec4d88d5003d89b90e"
};



const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();




export const auth = getAuth(app);
export const db = getFirestore(app);

export{app};
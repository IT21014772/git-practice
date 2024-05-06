import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBWSKuTy0OjNcIwEvNr7zFqui_8-RRLrNA",
  authDomain: "fitnest-3b1b9.firebaseapp.com",
  projectId: "fitnest-3b1b9",
  storageBucket: "fitnest-3b1b9.appspot.com",
  messagingSenderId: "415413167543",
  appId: "1:415413167543:web:21c02acfce38a744b8f432",
  measurementId: "G-RVMRQD9KY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_H9S8Zmxsw2Spj6M5wlRuQKRhnmu6Spg",
  authDomain: "portfolio-a7889.firebaseapp.com",
  projectId: "portfolio-a7889",
  storageBucket: "portfolio-a7889.firebasestorage.app",
  messagingSenderId: "962574173107",
  appId: "1:962574173107:web:331797f12571af3db441c6",
  measurementId: "G-WYRDWR5FNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
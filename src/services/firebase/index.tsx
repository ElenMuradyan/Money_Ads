import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "omegashop-67199.firebaseapp.com",
  projectId: "omegashop-67199",
  storageBucket: "omegashop-67199.firebasestorage.app",
  messagingSenderId: "503950051302",
  appId: "1:503950051302:web:c7a8ba0e158325da11b827",
  measurementId: "G-DQRW345RF2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{
    auth,
    db
}
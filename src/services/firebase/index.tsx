import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "z-chatbot-aaae5.firebaseapp.com",
  projectId: "z-chatbot-aaae5",
  storageBucket: "z-chatbot-aaae5.firebasestorage.app",
  messagingSenderId: "196313923587",
  appId: "1:196313923587:web:f2b4bbb4b924e22ff58e36",
  measurementId: "G-RNNSFV8LV1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export{
    auth,
    db,
    googleProvider,
    facebookProvider,
}
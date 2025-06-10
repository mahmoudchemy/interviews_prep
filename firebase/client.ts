import { initializeApp,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFqBtmcG97lRLl11eJWqivS0HN5K6so1Y",
  authDomain: "interviewmock-74021.firebaseapp.com",
  projectId: "interviewmock-74021",
  storageBucket: "interviewmock-74021.firebasestorage.app",
  messagingSenderId: "996116671136",
  appId: "1:996116671136:web:471cae326d9f7ee4d037c5",
  measurementId: "G-PYK0GK7C7D"
};

const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDfqeiplvD-IPBJgAQ4vFAMINfxXJ95YHQ",
  authDomain: "the-bakery-e-commerce.firebaseapp.com",
  projectId: "the-bakery-e-commerce",
  storageBucket: "the-bakery-e-commerce.appspot.com",
  messagingSenderId: "328821318280",
  appId: "1:328821318280:web:25604973e9c77ee98ab53d"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
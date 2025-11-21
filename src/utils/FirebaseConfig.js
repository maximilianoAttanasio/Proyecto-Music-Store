import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE8hSUMc3O6x5OAeWADv6SwY_NZICwEqU",
  authDomain: "tecnonautasinstrumentos.firebaseapp.com",
  projectId: "tecnonautasinstrumentos",
  storageBucket: "tecnonautasinstrumentos.firebasestorage.app",
  messagingSenderId: "335472403736",
  appId: "1:335472403736:web:6e55d1a33ad966a9b96a6d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

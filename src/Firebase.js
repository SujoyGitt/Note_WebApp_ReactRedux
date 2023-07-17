import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcrchKlZtcD4MrVQ0SV_BGybm2zfZDWMc",
  authDomain: "noteapp-c32a1.firebaseapp.com",
  projectId: "noteapp-c32a1",
  storageBucket: "noteapp-c32a1.appspot.com",
  messagingSenderId: "198223412447",
  appId: "1:198223412447:web:fdae2f2d432493ca763d6a",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
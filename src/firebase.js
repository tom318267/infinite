import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVWVl5lGzP_Jw2a9eVMDkhsaal6jxbP-s",
  authDomain: "infinite-6826e.firebaseapp.com",
  projectId: "infinite-6826e",
  storageBucket: "infinite-6826e.appspot.com",
  messagingSenderId: "69935470366",
  appId: "1:69935470366:web:67f30830f1060cb1eddb0f",
  measurementId: "G-DENBZVB5JR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

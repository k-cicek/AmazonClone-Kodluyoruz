import firebase from "firebase";


const firebaseConfig = {
  authDomain: "clone-b9846.firebaseapp.com",
  projectId: "clone-b9846",
  storageBucket: "clone-b9846.appspot.com",
  messagingSenderId: "765148331608",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
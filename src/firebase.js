import firebase from "firebase"
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCeXCKP1zIdjzn9TM8L7_ceQKQSMkEV7wE",
  authDomain: "utilizeapp-665e4.firebaseapp.com",
  projectId: "utilizeapp-665e4",
  storageBucket: "utilizeapp-665e4.appspot.com",
  messagingSenderId: "344099772012",
  appId: "1:344099772012:web:e3a8999d1cfab8a3556a49",
  measurementId: "G-P4RXXD0C47"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

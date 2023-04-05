import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtloBwLTwYFiQpR-CY5AuSHFRMJ-fcHP4",
    authDomain: "linkedlnclone-55475.firebaseapp.com",
    projectId: "linkedlnclone-55475",
    storageBucket: "linkedlnclone-55475.appspot.com",
    messagingSenderId: "671291770421",
    appId: "1:671291770421:web:8204f22defc140a023137c",
    measurementId: "G-DJDZ8BSXEW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth();

  export {db, auth}
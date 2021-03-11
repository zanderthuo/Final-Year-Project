import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCTgs_ouWpCtiFT9wrKB3mzEqzNg7wxbHs",
  authDomain: "final-year-project-11728.firebaseapp.com",
  projectId: "final-year-project-11728",
  storageBucket: "final-year-project-11728.appspot.com",
  messagingSenderId: "855786750138",
  appId: "1:855786750138:web:3ec0ba50d79ec36e514283"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

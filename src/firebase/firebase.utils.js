import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyC7ZKiYLedRdlheOiS-m32sKmdiUMq2ckY",
    authDomain: "crwn-db-3ef6d.firebaseapp.com",
    databaseURL: "https://crwn-db-3ef6d.firebaseio.com",
    projectId: "crwn-db-3ef6d",
    storageBucket: "crwn-db-3ef6d.appspot.com",
    messagingSenderId: "849281383141",
    appId: "1:849281383141:web:ed597454158aa56236b20c",
    measurementId: "G-21STLQGHL0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
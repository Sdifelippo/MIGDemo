import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB79R2t4ljQa99duOGM8OWLKmaryKNUvro",
    authDomain: "moments-in-gaming.firebaseapp.com",
    databaseURL: "https://moments-in-gaming.firebaseio.com",
    projectId: "moments-in-gaming",
    storageBucket: "moments-in-gaming.appspot.com",
    messagingSenderId: "1851435822"
  };
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

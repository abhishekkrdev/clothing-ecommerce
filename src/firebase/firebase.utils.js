import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC03v9sN0Xhp4990ugJ0hNa0mNusrVUYSA",
  authDomain: "crwn-clothing-db-597d3.firebaseapp.com",
  projectId: "crwn-clothing-db-597d3",
  storageBucket: "crwn-clothing-db-597d3.appspot.com",
  messagingSenderId: "676929706617",
  appId: "1:676929706617:web:acf5e014489389ba1192a8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

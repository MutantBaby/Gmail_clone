// import { firebase } from "@firebase/app";
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvtaAM_Aw-Bf3-J9uFh5OVB9BPdJLiGxw",
  authDomain: "clone-11264.firebaseapp.com",
  projectId: "clone-11264",
  storageBucket: "clone-11264.appspot.com",
  messagingSenderId: "243113853150",
  appId: "1:243113853150:web:9cebe2def353d9f9c9424f",
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

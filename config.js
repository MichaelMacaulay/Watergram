import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCep9TOC351fZVWYF4ML5jJRN-FZi0NWJA",
  authDomain: "updated-watergram.firebaseapp.com",
  databaseURL: "https://updated-watergram.firebaseio.com",
  projectId: "updated-watergram",
  storageBucket: "updated-watergram.appspot.com",
  messagingSenderId: "331728249491",
  appId: "1:331728249491:web:e35147f6d5256ed7f8a366"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
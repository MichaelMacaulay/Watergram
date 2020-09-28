import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBXAnO3TyaSLgE_S_vSuCb5sGaNQM73m-Y",
  authDomain: "updatedwatergramseptember.firebaseapp.com",
  databaseURL: "https://updatedwatergramseptember.firebaseio.com",
  projectId: "updatedwatergramseptember",
  storageBucket: "updatedwatergramseptember.appspot.com",
  messagingSenderId: "123639327463",
  appId: "1:123639327463:web:31a66b0e38ebceed4d5042"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
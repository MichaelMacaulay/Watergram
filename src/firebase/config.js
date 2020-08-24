import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQmoy8_-ZbN24cVvqZaVtIsseuVqZQHDE",
  authDomain: "hosting-9fb46.firebaseapp.com",
  databaseURL: "https://hosting-9fb46.firebaseio.com",
  projectId: "hosting-9fb46",
  storageBucket: "hosting-9fb46.appspot.com",
  messagingSenderId: "743360931289",
  appId: "1:743360931289:web:2c57e074367343dbf265c8",
  measurementId: "G-M83WVNWF8L"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
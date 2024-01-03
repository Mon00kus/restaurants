
// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';

//Estamos habilitando la base de datos
import 'firebase/firestore';


/* const firebaseConfig = {
  apiKey: "AIzaSyChthG3nBavyivSQLTTxMCatYY-hGvWXlY",
  authDomain: "crud-react-natiave.firebaseapp.com",
  projectId: "crud-react-natiave",
  storageBucket: "crud-react-natiave.appspot.com",
  messagingSenderId: "149606217699",
  appId: "1:149606217699:web:ea9747ba1d3929e442d2d6",
  measurementId: "G-ELW0N656EM"
}; */

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuKw731lC7uSN8PpSb5AnLICfzVgsDqew",
  authDomain: "crud-66f96.firebaseapp.com",
  projectId: "crud-66f96",
  storageBucket: "crud-66f96.appspot.com",
  messagingSenderId: "445423181966",
  appId: "1:445423181966:web:1244cc583096ec0a8029df"
};


// Initialize Firebase

//const app = initializeApp(firebaseConfig);

export const firebaseApp = firebase.initializeApp(firebaseConfig);

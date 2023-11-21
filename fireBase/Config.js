/* import * as firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {   
    apiKey: "AIzaSyBksuJLeTRD6zW2kbCxE4OkzTgHZEdiQq8",
    authDomain: "restaurants-40097.firebaseapp.com",
    projectId: "restaurants-40097",
    storageBucket: "restaurants-40097.appspot.com",
    messagingSenderId: "264838967477",
    appId: "1:264838967477:web:25b74be9d97da09449cefc"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig) */
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
    apiKey: "AIzaSyBksuJLeTRD6zW2kbCxE4OkzTgHZEdiQq8",
    authDomain: "restaurants-40097.firebaseapp.com",
    projectId: "restaurants-40097",
    storageBucket: "restaurants-40097.appspot.com",
    messagingSenderId: "264838967477",
    appId: "1:264838967477:web:25b74be9d97da09449cefc"
}
// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)
const auth = initializeAuth(firebase, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)    
})
/* auth.authStateReady = getAuth(app) */
export { db, auth }
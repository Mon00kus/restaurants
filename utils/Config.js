import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage' 

const firebaseConfig = {
    apiKey: "AIzaSyBksuJLeTRD6zW2kbCxE4OkzTgHZEdiQq8",
    authDomain: "restaurants-40097.firebaseapp.com",
    projectId: "restaurants-40097",
    storageBucket: "restaurants-40097.appspot.com",
    messagingSenderId: "264838967477",
    appId: "1:264838967477:web:25b74be9d97da09449cefc"
}
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = initializeAuth(firebaseApp, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)    
}) 

export { auth, db }
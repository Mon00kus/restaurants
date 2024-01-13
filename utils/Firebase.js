import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig =  {
  apiKey: "AIzaSyBksuJLeTRD6zW2kbCxE4OkzTgHZEdiQq8",
  authDomain: "restaurants-40097.firebaseapp.com",
  projectId: "restaurants-40097",
  storageBucket: "restaurants-40097.appspot.com",
  messagingSenderId: "264838967477",
  appId: "1:264838967477:web:25b74be9d97da09449cefc"
}

const firebasebApp = firebase.initializeApp(firebaseConfig, 'restaurants')

export const Db = firebasebApp.firestore()
export const Auth = firebasebApp.auth()
export const St = firebasebApp.storage()
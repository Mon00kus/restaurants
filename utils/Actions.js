import { auth } from './Config'
import { onAuthStateChanged, currentUser } from 'firebase/auth'

const isUserLogged = () => {
   return  new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       resolve(user !== null)
       unsubscribe()
     })
   }) 
 }

 const getCurrentUser = () => {
   return new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       unsubscribe()
       resolve(user !== null)
     }) 
     const initialUser = currentUser(auth);
     if (initialUser !== null) {
       resolve(true)
     }
   })
 }

 export { isUserLogged, getCurrentUser }

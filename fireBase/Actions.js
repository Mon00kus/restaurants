import { auth } from './Config';  
import { getAuth, onAuthStateChanged, currentUser } from 'firebase/auth';


const userIsLogged = () => {
   return  new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       resolve(user !== null);
       unsubscribe();
     });
   });  
 };

 const getCurrentUser = () => {
   return new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       unsubscribe();
       resolve(user !== null);
     });
 
     const initialUser = currentUser(auth);
     if (initialUser !== null) {
       resolve(true);
     }
   });
 };

 export { userIsLogged, getCurrentUser }

import { auth } from './Config';  
import { getAuth, onAuthStateChanged, currentUser as getCurrentUser } from 'firebase/auth';


const userIsLogged = () => {
   return  new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       resolve(user !== null);
       unsubscribe();
     });
   });  
 };

 const currentUser = () => {
   return new Promise((resolve) => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       unsubscribe();
       resolve(user !== null);
     });
 
     const initialUser = getCurrentUser(auth);
     if (initialUser !== null) {
       resolve(true);
     }
   });
 };

 export { userIsLogged, currentUser }

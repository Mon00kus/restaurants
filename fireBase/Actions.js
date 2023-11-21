import { auth } from './Config'
export const userIsLogged = (user) =>{
   let isLogged = false   
   auth.onAuthStateChanged((user)=>{
      user !== null && (isLogged=true)
   })
   user !== null && (isLogged = true)
   return isLogged
}
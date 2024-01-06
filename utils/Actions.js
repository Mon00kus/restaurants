import { Auth } from './Firebase'

export const isUserLogged = async () => {
    let isLogged = false
    await Auth.onAuthStateChanged((user)=>{
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return Auth.currentUser
}
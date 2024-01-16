import { Auth, St } from './Firebase'
import * as Notifications from 'expo-notifications'
import { fileToBlob } from './Helpers'
import { Alert } from 'react-native'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens'

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

export const closeSession = () => {    
    return Auth.signOut()
}

export const registerUser = async (email, password, fullName) => {
    const result = {statusResponse : true, error : null}
    try {        
        await Auth.createUserWithEmailAndPassword(email, password)
        await Auth.currentUser.updateProfile({displayName : fullName})
    } catch (error) {        
        result.statusResponse = false
        result.error = 'Usuario existente ó password invalido'
    }
    return result
}

export const loginWithEmailAndPassword  = async(email, password) => {
    const result = {statusResponse : true, error: null}
    try {
        await Auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = "Usuario ó contraseña invalidos"
    }
    return result
}

export const uploadImage = async(Image, path, name) => {
    const result = { statusResponse: false, error: null, url: null }
    const ref = St.app.storage().ref(path).child(name)
    const blob = await fileToBlob(Image)
    try {
        await ref.put(blob)
        const url = await St.app.storage().ref(`${path}/${name}`).getDownloadURL()
        result.statusResponse = true
        result.url = url
    } catch (error) {
        result.error = error
    }
    return result
}

export const updateProfile = async (data) => {
    const result = { statusResponse: true, error: null }
    try { 
       await Auth.currentUser.updateProfile(data)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result
}

export const getToken = async() => {
    if (!Constans.isDevice) {
        Alert.alert("Debes utilizar un dispositivo físico para poder utilizar las notificaciones.")
        return
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status 
    }

    if (finalStatus !== "granted") {
        Alert.alert("Debes dar permiso para acceder a las notificaciones.")
        return
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data

    if (Platform.OS == "android") {        
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C"
        })
    }

    return token
}

export const addDocumentWithId = async(collection, data, doc) => {
    const result = { statusResponse: true, error: null }
    try {
        await db.collection(collection).doc(doc).set(data)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}
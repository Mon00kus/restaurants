import * as Locations from 'expo-location'
import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native';

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export const loadImageFromGallery = async(array) => {
    const response = {status: false, image:null}
    const resultPermission = await Locations.requestForegroundPermissionsAsync()
    if (resultPermission === 'denied'){
        Alert.alert('Permission to access location was denied, verify it!!!')
        return response
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array,
        mediaTypes: ImagePicker.MediaTypeOptions.All
    })
    if (result.canceled){
        return response
    }
    response.status = true
    response.image = result.assets[0].uri    
    return response
}   

export const fileToBlob = async(path) => {
    const file = await fetch(path)
    const blob = await file.blob()
    return blob
}
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

import { loadImageFromGallery } from "../../../utils/Helpers";
import { updateProfile, uploadImage } from "../../../utils/Actions";

import Styles from "./Styles";

export default function InfoUser({ user, setLoading, setLoadingText }) {

  const [photoUrl, setPhotoUrl] = useState(user.photoURL);

  const changePhoto = async() => {
    const result = await loadImageFromGallery([1, 1]);
    if (!result.status) {
      return;
    }
    setLoadingText("Actualizando image...");
    setLoading(true);
    const resultUploadImage = await uploadImage(result.image, "avatars", user.uid);
    if (!resultUploadImage.statusResponse) {
      setLoading(false);
      Alert.alert("Ha ocurrido un error almacenando la foto de perfil");
      return;
    }
    const resultUpdateProfile 
      = await updateProfile({        
        photoURL: resultUploadImage.url 
      });
    setLoading(false);
    if (resultUpdateProfile.statusResponse) {
      setPhotoUrl(resultUploadImage.url);
    } else {
      Alert.alert("Ha ocurrido un error actualizar foto de perfil");
    }
  };
  
  return (
    <View style={Styles.container}>
      <Avatar
        rounded={true}
        size={"large"}
        onPress={changePhoto}                
        source={
          photoUrl ? {uri : photoUrl} : require("../../../assets/avatar-default.png")
        }
      />
      <View style={Styles.infoUser}>
        <Text style={Styles.displayName}>
          {user.displayName ? user.displayName : "Anónimo"}
        </Text>
        <Text>{user.email}</Text>        
      </View>
    </View>
  );
}
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { isEmpty } from 'lodash';

import { validateEmail } from '../../../utils/Helpers';
import { reAuthenticate } from '../../../utils/Actions';

import Styles from "./Styles";

export default function ChangeEmailForm({ email, setShowModal, toastRef, setReLoadUser }) {

  const [newEmail, setNewEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async() => {
    if (!validateForm) {
      return;
    }
    setLoading(true);
    const resultReAuthentiate = await reAuthenticate(password);
    if (!resultReAuthentiate.statusResponse){
      setLoading(false);
      setErrorPassword('Contrasena incorrecta');
      return;
    }
    
  }

  const validateForm = () => {
    setErrorEmail(null);
    setErrorPassword(null);
    let isValid = true;
    if (!validateEmail(newEmail)){
      setErrorEmail('Debes ingresar un @email valido');
      isValid = false;
    }
    if(newEmail===email){
      setErrorEmail('Debes ingresar un @email diferente al actual');
      isValid = false;
    }
    if (isEmpty(password)){
      setErrorPassword('Debes ingresar tu contraseña')
      isValid = false;
    }
    return isValid;
  }
    
  return (
    
    <View>
      <Input
        placeholder='Ingresa tu nuevo correo'
        containerStyle={Styles.input}
        defaultValue={email}
        keyboardType="email-address"
        onChange={(e) => setNewEmail(e.nativeEvent.text)}
        errorMessage={errorEmail}
        rightIcon={{
            type: "material-community",
            name: "at",
            color: "#c2c2c2"
        }}
      />
      <Input 
        placeholder="Ingresa tu contraseña..."
        containerStyle={Styles.input}
        defaultValue={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        errorMessage={errorPassword}
        password={true}
        secureTextEntry={!showPassword}
      />
      <Button 
        title="Cambiar Email"
        containerStyle={Styles.buttonContainer}
        buttonStyle={Styles.button}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  )
}
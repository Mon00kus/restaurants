import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { size } from 'lodash'

import { validateEmail } from '../../utils/Helpers'
import { registerUser } from '../../utils/Actions'
import Loading from '../Loading/Loading'

import Styles from './Styles'

export default function RegisterForm() {
  /* const [fullName, setFullName] = useState("") */
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirmPassword] = useState("")
  const [isPasswordIconPressed, setIsPasswordIconPressed] = useState(false)
  const [isConfirmPasswordIconPressed, setIsConfirmPasswordIconPressed] = useState(false)
  const [formData, setFormData] = useState(defaultFormValues())
  
  /* const [errorFullName, setErrorFullName] = useState("") */
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirm, setErrorConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  
  const navigation = useNavigation()
  
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const onPasswordIconPress = () => {
      setIsPasswordIconPressed(!isPasswordIconPressed)
  }

  const onConfirmPasswordIconPress = () => {
      setIsConfirmPasswordIconPressed(!isConfirmPasswordIconPressed)
  }

  const onRegisterPress = async (formData) => {

    if (!validateData()) {
      return
    }

    setLoading(true)
    const result = await registerUser(formData.email, formData.password)
    setLoading(false)

    if (!result.statusResponse){
      setErrorEmail(result.error)
      return
    }

    navigation.navigate("account")
  }


  const validateData = () => {
    setErrorConfirm("")
    setErrorEmail("")
    setErrorPassword("")
    let isValid = true

    /* if (formData.fullName==='') {
      setErrorFullName("Debes ingresar un nombre para lu local.")
      isValid = false
    } */

    if(!validateEmail(formData.email)) {
        setErrorEmail("Debes ingresar un email válido.")
        isValid = false
    }

    if(size(formData.password) < 6) {
        setErrorPassword("Contraseña debe tener al menos seis carácteres.")
        isValid = false
    }

    if(size(formData.confirm) < 6) {
        setErrorConfirm("Confirmación de contraseña debe tener al menos seis carácteres.")
        isValid = false
    }

    if(formData.password !== formData.confirm) {
        setErrorPassword("La contraseña y la confirmación no son iguales.")
        setErrorConfirm("La contraseña y la confirmación no son iguales.")
        isValid = false
    }

    return isValid
}

  return (
    <View 
      style = {Styles.form}
      > 
      <KeyboardAwareScrollView>
     {/*    <Input  }
          value={fullName} 
          {defaultValue={fullName}
          onChangeText={(text) => setFullName(text)}
          containerStyle = {Styles.input}        
          placeholder='Ingresa tu Nombre...'
          onChange={(e)=> onChange(e, "fullName")}
          errorMessage={errorFullName}
        /> */} 
        <Input 
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle = {Styles.input}
          placeholder='Ingresa tu @email...'      
          onChange={(e)=> onChange(e, "email")}  
          keyboardType='email-address'
          errorMessage={errorEmail}
        />
        <Input 
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle = {Styles.input}
          placeholder='Ingresa tu password...'
          onChange={(e)=> onChange(e, "password")}
          password ={true}
          secureTextEntry={!isPasswordIconPressed}
          errorMessage={errorPassword}
          rightIcon={                                      
              <Icon                 
                type='material-community'             
                name={isPasswordIconPressed ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={[
                  Styles.icon,
                  isPasswordIconPressed && { color: 'blue' },
                ]} 
                onPress={onPasswordIconPress}
              />            
          }          
        />
        <Input 
          defaultValue={confirm}
          onChangeText={(text) => setConfirmPassword(text)}
          containerStyle = {Styles.input}
          placeholder='Confirma tu password...'
          onChange={(e)=> onChange(e, "confirm")}
          password ={true}
          secureTextEntry={!isConfirmPasswordIconPressed}
          errorMessage={errorConfirm}
          rightIcon={                                      
            <Icon                 
              type='material-community'              
              name={isConfirmPasswordIconPressed ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={[
                Styles.icon,
                isConfirmPasswordIconPressed && { color: 'blue' },
              ]} 
              onPress={onConfirmPasswordIconPress}
            />            
        }
        />
        <Button 
              buttonStyle={Styles.button}
              containerStyle={Styles.btnContainer}
              title={'Registrar nuevo usuario'}
              onPress={() => onRegisterPress(formData)} 
        />
        <Loading  isVisible={loading} text={'Registrando cuenta'} />
      </KeyboardAwareScrollView>      
    </View>    
  )
}

const defaultFormValues = () => {
  return {/* fullName: '', */ email: '', password :'', confirm : ''}
}
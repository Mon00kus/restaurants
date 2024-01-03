import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

import Styles from './Styles'

export default function RegisterForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState(defaultFormvalues())

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  /* const clearInput = (inputName) => {
    if (inputName === "fullName") {
      setFullName("")
    } else if (inputName === "email") {
      setEmail("")
    } else if (inputName === "password") {
      setPassword("")
    } else if (inputName === "confirmPassword") {
      setConfirmPassword("")
    }
  } */

  const [isPasswordIconPressed, setIsPasswordIconPressed] = useState(false)
  const [isConfirmPasswordIconPressed, setIsConfirmPasswordIconPressed] = useState(false)

  const togglePasswordIconPress = () => {
      setIsPasswordIconPressed(!isPasswordIconPressed)
  }

  const toggleConfirmPasswordIconPress = () => {
      setIsConfirmPasswordIconPressed(!isConfirmPasswordIconPressed)
  }

  const onRegisterPress = (formData) => {
  
    console.log(formData)

    if (password !== confirmPassword) {
      console.log("Los passwords no coinciden.")
      return
    }
    
    /* navigation.navigate('Inside') */
  }

  const navigation = useNavigation()

  return (
    <View 
      style = {Styles.form}
      > 
      <KeyboardAwareScrollView>
        <Input 
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          containerStyle = {Styles.input}        
          placeholder='Ingresa tu Nombre...'
          onChange={(e)=> onChange(e, "fullName")}
        /> 
        <Input 
          value={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle = {Styles.input}
          placeholder='Ingresa tu @email...'      
          onChange={(e)=> onChange(e, "email")}  
        />
        <Input 
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle = {Styles.input}
          placeholder='Ingresa tu password...'
          onChange={(e)=> onChange(e, "password")}
          password ={true}
          secureTextEntry={!isPasswordIconPressed}
          rightIcon={                                      
              <Icon                 
                type='material-community'             
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={[
                  Styles.icon,
                  isPasswordIconPressed && { color: 'blue' },
                ]} 
                onPress={togglePasswordIconPress}
              />            
          }          
        />
        <Input 
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          containerStyle = {Styles.input}
          placeholder='Confirma tu password...'
          onChange={(e)=> onChange(e, "confirmPassword")}
          password ={true}
          secureTextEntry={!isConfirmPasswordIconPressed}
          rightIcon={                                      
            <Icon                 
              type='material-community'              
              name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={[
                Styles.icon,
                isConfirmPasswordIconPressed && { color: 'blue' },
              ]} 
              onPress={toggleConfirmPasswordIconPress}
            />            
        }
        />
        <Button 
              buttonStyle={Styles.button}
              containerStyle={Styles.btnContainer}
              title={'Registrar nuevo usuario'}
              onPress={() => onRegisterPress(formData)}    
        />
      </KeyboardAwareScrollView>      
    </View>    
  )
}

defaultFormvalues = () => {
  return { fullName : "", email : "", password : "", confirmPassword : ""}
}
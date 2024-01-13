import React, { useState } from "react"
import { View } from "react-native"
import { Input, Icon, Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { isEmpty } from "lodash"

import { validateEmail } from "../../../utils/Helpers"
import { loginWithEmailAndPassword } from "../../../utils/Actions"

import Styles from "./Styles"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordIconPressed, setIsPasswordIconPressed] = useState(false)
  const [formData, setFormData] = useState(defaultFormValues())
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const onPasswordIconPress = () => {
    setIsPasswordIconPressed(!isPasswordIconPressed)
  }

  const onLoginPress = async() => {    
    if (!validateData()){
        return
    }
    setLoading(true)
    const result = await loginWithEmailAndPassword(formData.email, formData.password)
    setLoading(false)
  
    if (!result.statusResponse){
       setErrorEmail(result.error)
       setErrorPassword(result.error)
       return
    }
  
    navigation.navigate('account')
  }

  const validateData = () => {
    setErrorEmail("")
    setErrorPassword("")
    let isValid = true
    if (!validateEmail(formData.email)) {
        setErrorEmail("Debes ingresar un email válido")
        isValid = false
    }
    if (isEmpty(formData.password)){
        setErrorPassword('Debes ingresar tu contraseña')
        isValid = false
    }
    return isValid
  }
  
  return (
    <View
        style = {Styles.form}
    >
      <KeyboardAwareScrollView
      >
        <Input
            defaultValue={formData.email}
            /* onChangeText={(text) => setEmail(text)} */
            containerStyle = {Styles.input}
            placeholder='Ingresa tu @email...'
            onChange={(e)=> onChange(e, "email")}  
            keyboardType="email-address"
            errorMessage={errorEmail}
        />
        <Input
            defaultValue={formData.password}
            containerStyle = {Styles.input}
            placeholder='Ingresa tu password...'
            /* onChangeText={(text) => setPassword(text)} */
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
        <Button
            buttonStyle={Styles.button}
            containerStyle={Styles.btnContainer}
            title={'Iniciar session'}
            onPress={() => onLoginPress()} 
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

const defaultFormValues = () => {
    return {email: '', password :''}
}
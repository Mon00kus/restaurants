import React from 'react'
import { Image, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../../components/account/registerForm/RegisterForm'


import Styles from './Styles'

export default function Register() {
  return (
    <View>
      <KeyboardAwareScrollView        
        style={Styles.viewBody}
      >
        <Image 
          source={require("../../../assets/takoLogo.png")}
          resizeMode='contain'
          style={Styles.image}
        />  
        <RegisterForm />
      </KeyboardAwareScrollView>
    </View>
  )
}
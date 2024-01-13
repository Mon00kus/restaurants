import React from 'react'
import { View, Image, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import Styles from './Styles'
import LoginForm from '../../../components/account/loginForm/LoginForm'

export default function Login() {
  const navigation = useNavigation()
  return (
    <View
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <KeyboardAwareScrollView
        centerContent = {true}
        style={Styles.viewBody}
      >
      <Image
        source={require("../../../assets/takoLogo.png")}
        resizeMode="contain"
        style={Styles.image}>
      </Image>
      <View>
        <LoginForm/>        
        <CreateAccount/>        
      </View>
      </KeyboardAwareScrollView>
    </View>
  )
  function CreateAccount(props){
    const navigation = useNavigation()
    return (
      <Text onPress={()=>navigation.navigate('register')} 
            style={Styles.loginFooterText}>
            Aun no tienes cuenta? {" "}
          <Text style={Styles.footerLinkRegistro}> Registrate </Text>
      </Text>
    )
  }
}
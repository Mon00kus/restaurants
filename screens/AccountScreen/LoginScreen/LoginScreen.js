import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import styles from './Styles'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const clearInput = (inputType) => {
    if (inputType === 'email') {
      setEmail('')
    } else if (inputType === 'password') {
      setPassword('')
    }
  }

  const navigation = useNavigation()
  
  /* const onLoginPress = () => {
    navigation.navigate('Inside')    
  
  } */
  
  return (
    <View style={styles.container}>
       <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">
          <Image  style={styles.logo}
            source={require('../../../assets/icon.png')}            
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              onChangeText={(text) => setEmail(text)}
              value={email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            {email !== '' && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => clearInput('email')}>
                <Icon name="close" size={30} color="#442484" />
              </TouchableOpacity>
            )}
          </View>
          <View>
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaa"
                secureTextEntry
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            {password !== '' && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => clearInput('password')}>
                <Icon name="close" size={30} color="#442484" />
              </TouchableOpacity>
            )}
          </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Inside')}>
            <Text style={styles.buttonTitle}>Ingresar</Text>
         </TouchableOpacity>
         <View style={styles.footerView}>                
            <CreateAcount/>
         </View>
       </KeyboardAwareScrollView>
    </View>
  )
}

/* function onFooterLinkPress () {
  const navigation = useNavigation()
  navigation.navigate('Registro')
} */

function CreateAcount(props) {
  const navigation = useNavigation()
   return(
          <Text onPress={()=>navigation.navigate('Registro')} style={styles.loginFooterText}> 
            Aun no tienes cuenta? {" "}
            <Text style={styles.footerLinkRegistro}> Registrate
          </Text>
        </Text> 
   )
}
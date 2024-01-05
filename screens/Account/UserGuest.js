import React from 'react'
import { Image, Text, View } from 'react-native'

import Styles from './Styles'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Divider } from 'react-native-elements'

export default function UserGuest() {
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
       source={require("../../assets/takoLogo.png")}
       resizeMode="contain"
       style={Styles.image}>
    </Image>
    <Text style = {Styles.title}>Consulta tu perfil en TakoBurger</Text>
    <Text style = {Styles.description}>Como describirias tu mejor lugar de comida ? 
        Busca y visualiza las mejores hamburguesas de una forma sencilla</Text>
    <Divider style = {Styles.divider}/>
    <Button       
      buttonStyle={Styles.button}
      title="Ver perfil"            
      onPress={() => navigation.navigate('Ingreso')}
    /> 
    <Divider style = {Styles.divider}/>  
    </KeyboardAwareScrollView>
  </View>
  )
}
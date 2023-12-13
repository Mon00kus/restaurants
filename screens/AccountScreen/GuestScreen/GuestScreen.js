import React from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { Button, Divider } from 'react-native-elements'
/* import { ScrollView } from 'react-native-gesture-handler' */
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Styles'

export default function GuestScreen(){
  const navigation = useNavigation()
  return (
    <View
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <KeyboardAwareScrollView
        centerContent = {true}        
        style={styles.viewBody}
      >
      <Image
         source={require("../../../assets/restaurant-logo.png")}
         resizeMode="contain"
         style={styles.image}>
      </Image>
      <Text style = {styles.title}>Consulta tu perfil en TakoBurger</Text>
      <Text style = {styles.description}>Como describirias mejor tu venta de comida ? Busca y visualiza los mejores Burgers de una forma sencilla</Text>
      <Divider style = {styles.divider}/>
      <Button 
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        title="Ver perfil"
        color="#442484"        
        titleStyle={{ color: '#ff7373' }} 
        onPress={() => navigation.navigate('Ingreso')}
      />    
      <Divider style = {styles.divider}/>
      </KeyboardAwareScrollView>
    </View>
  )
}
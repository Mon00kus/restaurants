import React, { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useNavigation } from '@react-navigation/native'
import { Icon } from "react-native-elements"
/* import Icon from "react-native-vector-icons" */
import styles from "./Styles"
/* import { color } from "react-native-elements/dist/helpers" */

export default function RegistrationScreen() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const clearInput = (inputName) => {
    if (inputName === "fullName") {
      setFullName("")
    } else if (inputName === "email") {
      setEmail("")
    } else if (inputName === "password") {
      setPassword("")
    } else if (inputName === "confirmPassword") {
      setConfirmPassword("")
    }
  }

 /*  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  } */

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      console.log("Passwords don't match.")
      return
    }
    navigation.navigate('Inside')
  }

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/icon.png")}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu Nombre completo"
            placeholderTextColor="#aaa"
            onChangeText={(text) => setFullName(text)}            
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"           
          />         
          {fullName !== "" && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => clearInput("fullName")}
            >                            
              <Icon 
                 name="close" 
                 size={25} 
               />
            </TouchableOpacity>            
          )}           
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu Email"
            placeholderTextColor="#aaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          {email !== "" && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => clearInput("email")}
            >
              <Icon 
                 name="close" 
                 size={25} 
               />          
            </TouchableOpacity>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"            
            placeholder="Ingresa tu Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          {password !== "" && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => clearInput("password")}
            >
              <Icon 
                name="close"
                size={25} 
              />
            </TouchableOpacity>
          )}
          {password !== "" && (
            <TouchableOpacity
              style={styles.showPassword}
              onPress={()=> setShowPassword(!showPassword)}              
            >              
              <Icon 
                type="material-community" 
                name={showPassword ? 'eye' : 'eye-outline'} 
                size={25}  
                />
            </TouchableOpacity>
          )} 
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"
            placeholder="Confirma tu Password"
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          {confirmPassword !== "" && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => clearInput("confirmPassword")}
            >
              <Icon 
                name="close" 
                size={25}  />
            </TouchableOpacity>
          )}
          {confirmPassword !== "" && (
            <TouchableOpacity
              style={styles.showPassword}
              onPress={()=> setShowConfirmPassword(!showConfirmPassword)}
            >              
              <Icon 
                type="material-community" 
                name={showConfirmPassword ? 'eye' : 'eye-outline'} 
                size={25} 
             />
            </TouchableOpacity>
          )} 
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Resgistrarse</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <IntoAcount/>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

function IntoAcount(props) {
  const navigation = useNavigation()
   return(
          <Text onPress={()=>navigation.navigate('Ingreso')} style={styles.loginFooterText}> 
            Ya tienes cuenta? {" "}
            <Text style={styles.footerLinkRegistro}> Ingresa
          </Text>
        </Text> 
   )
}
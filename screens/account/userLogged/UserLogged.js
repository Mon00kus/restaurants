import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { closeSession, getCurrentUser } from '../../../utils/Actions'
import Loading from '../../../components/Loading/Loading'
import InfoUser from '../../../components/infoUser/InfoUser'

import Styles from './Styles'

export default function UserLogged() {

  const toastRef = useRef()
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  const [user, setUser] = useState(null)
  const [reloader, setReloader] = useState(false)

  useEffect(()=>{
    setUser(getCurrentUser())
    setReloader(false)
  }, [reloader])

  return (
    <View
      style={Styles.container}
    >
      <KeyboardAwareScrollView>
      {
          user && (
            <View>            
              <InfoUser 
                user={user}
                setLoading={setLoading}
                setLoadingText={setLoadingText}
              />
              <Text>Account Options</Text>
            </View>
          )
        }
        <Button   
            buttonStyle={Styles.button}
            title="Cerrar session"
            onPress={() => {
              closeSession()
              navigation.navigate('restaurants')
            }}
        />
      </KeyboardAwareScrollView>      
     <Toast ref={toastRef} position="center" opacity={0.9}/>
     <Loading isVisible={loading} text={loadingText}/>
    </View>
  )
}
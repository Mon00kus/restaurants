import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { userIsLogged } from '../../fireBase/Actions'

import Parse from 'parse/react-native'

import GuestScreen from './GuestScreen'
import LoggedScreen from './LoggedScreen'

export default function AccountScreen() {

  const [login, setLogin] = useState(null)

  const currentUser = async function() {
    const curreUser = await Parse.User.currentAsync()
    if (curreUser!==null){
       console.log(`${curreUser.get('username')} is the current user!!!`)
    }
    return curreUser
  }

  useEffect(() => {
    setLogin( userIsLogged(currentUser) )
  }, [])
  
  if (login===null){
    return <Text>Cargando...</Text>
  }

  return (
    <View>
      <Text>AccountScreen!!!qqq</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { currentUser, userIsLogged } from '../../fireBase/Actions'

import GuestScreen from './GuestScreen'
import LoggedScreen from './LoggedScreen'

export default function AccountScreen() {

  const [login, setLogin] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
     /*  const currentUsr = await currentUser(); */
      const isUserLogged = await userIsLogged();
      setLogin(isUserLogged);
    };

    fetchData();
  }, []);
  
  if (login === null){
    return <Text>Cargando...</Text>
  }

  return login ? <LoggedScreen/> : <GuestScreen/>
}

const styles = StyleSheet.create({})
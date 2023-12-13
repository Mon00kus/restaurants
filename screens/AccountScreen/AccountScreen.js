import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { userIsLogged } from '../../fireBase/Actions'

import GuestScreen from './GuestScreen/GuestScreen'
import LoggedScreen from './LoggedScreen/LoggedScreen'
import Loading from '../../components/Loading/Loading'

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
    return <Loading isVisible={true} text="Cargando..." />
  }

  return login ? <LoggedScreen/> : <GuestScreen/>
}

const styles = StyleSheet.create({})
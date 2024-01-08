import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Loading from '../../../components/Loading/Loading'

import UserLogged from '../userLogged/UserLogged'
import UserGuest from '../userGuest/UserGuest'

import Styles from './Styles'
import { getCurrentUser, isUserLogged } from '../../../utils/Actions'

export default function Account() {
  const [login, setLogin] = useState(null)
  
  useFocusEffect (
    useCallback(()=>{
       const user = getCurrentUser()
       user ? setLogin(true) : setLogin(false)
    }, [])
  )

  if (login===null){
    return <Loading isVisible={true} text="Cargando..."/>
  }

  return (
    login ? <UserLogged/> : <UserGuest/>
  )
}
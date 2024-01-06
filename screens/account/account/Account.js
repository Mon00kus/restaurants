import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading/Loading'
import { isUserLogged } from '../../../utils/Actions'

import UserLogged from '../userLogged/UserLogged'
import UserGuest from '../userGuest/UserGuest'

import Styles from './Styles'

export default function Account() {
  const [login, setLogin] = useState(null)

  useEffect (()=>{
    const fetchData = async () => {
      const isUserLog = await isUserLogged()
      setLogin(isUserLog)
    }
    fetchData()
  }, [])

  if (login===null)
    return <Loading isVisible={true} text="Cargando..."/>

  return (
    login ? <UserLogged/> : <UserGuest/>
  )
}
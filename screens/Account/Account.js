import   React, { useEffect, useState } from 'react'
import { isUserLogged } from '../../utils/Actions'
import Loading from '../../components/loading/Loading'

import UserLogged from './UserLogged'
import UserGuest from './UserGuest'

import Styles from './Styles'

export default function Account() {

  const [login, setLogin]  = useState(null)

  useEffect(()=>{
    const fetchData = async() => {
      const isUserLoge = await isUserLogged()
      setLogin(isUserLoge)
    }
    fetchData()
  },[])

  if (login===null){
    return <Loading isVisible={true} text="Cargando..."/>
  }

  return (
    login ? <UserLogged/> : <UserGuest/>
  )
}
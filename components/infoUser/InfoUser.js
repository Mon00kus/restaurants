import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import Styles from './Styles'

export default function InfoUser({user, setLoading, setLoadingText}) {

  const [photoUrl, setPhotoUrl] = useState(user.photoUrl)

  const changePhoto = async()=> {
    console.log('Changing photo')
  }

  return (
    <View
        style={Styles.container}
    >
      <Avatar
        rounded = {true}
        size={'large'}
        onPress={changePhoto}
        source={
           user.photoUrl ? {uri : user.photoUrl} : require('../../assets/avatar-default.png')
        }
      />
      <View style={Styles.infoUser}>
        <Text style={Styles.displayName}>
           {
             user.displayName ? user.displayName : "Anónimo"
           }
        </Text>
        <Text>{user.email}</Text>
      </View>
      <Text>InfoUser......!!!!!</Text>
    </View>
  )
}
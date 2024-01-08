import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { closeSession } from '../../../utils/Actions'

import Styles from './Styles'

export default function UserLogged() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Estas logueado</Text>
      <Button       
          buttonStyle={Styles.button}
          title="Cerrar session"
          onPress={() => {
            closeSession()
            navigation.navigate('restaurants')
          }}
      />
    </View>
  )
}
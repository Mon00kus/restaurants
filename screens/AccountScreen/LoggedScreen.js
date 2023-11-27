import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { currentUser } from '../../fireBase/Actions'

export default function LoggedScreen() {    
  const cuName = currentUser
  return (
    <View>
      <Text>Usuario  - {cuName}</Text>
    </View>
  )  
}

const styles = StyleSheet.create({})
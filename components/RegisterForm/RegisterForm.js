import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import styles from './Styles'

export default function RegisterForm() {
  return (
    <View style={styles.form}>
      <Input
          placeholder='Ingresa tu @mail...'
          style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
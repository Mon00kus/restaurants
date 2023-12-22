import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites/Favorites'

const Stack = createStackNavigator()

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
         name='favoritesStack'
         component={Favorites}
         options={{title:"Favoritos"}}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
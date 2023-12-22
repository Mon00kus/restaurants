import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/Search/Search';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen
          name='SearchStack'
          component={Search}          
          options={{ title : "Busquedas..."}}
       />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
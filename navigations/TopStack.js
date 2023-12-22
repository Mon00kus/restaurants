import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopRestaurants from '../screens/TopRestaurants/TopRestaurants'

const Stack = createNativeStackNavigator();

export default function TopStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='topStack'
            component={TopRestaurants}
            options={{ title : "Mejores restaurantes"}}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
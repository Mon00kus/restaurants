import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Top5Screen from '../screens/Top5Screen/Top5Screen';

const Stack = createNativeStackNavigator();

export default function Top5Stack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='top5Stack'
            component={Top5Screen}
            options={{title:'Top 5'}}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
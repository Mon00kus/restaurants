
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Searchs from '../screens/searchs/Searchs'

const Stack = createNativeStackNavigator()

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SearchStack'
        component={Searchs}          
        options={{ title : "Busquedas..."}}
      />
    </Stack.Navigator>
  )
}
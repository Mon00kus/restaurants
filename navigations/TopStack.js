import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TopRestaurants from '../screens/topRestaurants/TopRestaurants'

const Stack = createNativeStackNavigator()

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

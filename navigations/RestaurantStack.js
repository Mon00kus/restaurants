
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Restaurants from '../screens/restaurants/Restaurants'

const Stack = createNativeStackNavigator()

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 

        name='restaurantsStack'
        component={Restaurants}     
        options={{ title : "Nuestros Restaurantes"}}     
      />
    </Stack.Navigator>
  )
}



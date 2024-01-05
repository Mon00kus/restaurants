import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Favorites from '../screens/favorites/Favorites'

const Stack = createNativeStackNavigator()

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
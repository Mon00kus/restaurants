import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';

const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
         name='FavoriteStack'
         component={FavoriteScreen}
         options={{title:"Favorites"}}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
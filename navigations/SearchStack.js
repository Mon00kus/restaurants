import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen/SearchScreen';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen
          name='SearchStack'
          component={SearchScreen}
       />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../screens/restaurants/Restaurants';

const Stack = createStackNavigator();

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
};

const styles = StyleSheet.create({});
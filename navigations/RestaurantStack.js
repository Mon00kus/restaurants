import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen';

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='restaurantsStack'
          component={RestaurantScreen}
          options={{title:"Restaurants"}}
      />
    </Stack.Navigator>
  )
};

const styles = StyleSheet.create({});
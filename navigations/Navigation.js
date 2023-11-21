import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator();

export default function Navigation() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Ingreso" component={LoginScreen} />
              <Stack.Screen name="Registro" component={RegistrationScreen} />
              <Stack.Screen name="Inside" component={HomeScreen} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
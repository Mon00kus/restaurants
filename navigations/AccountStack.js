import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Account from '../screens/account/account/Account'
import Login from '../screens/account/login/Login'
import Register from '../screens/account/register/Register'

const Stack = createNativeStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='account'
        component={Account}
        options={{title:"Cuenta"}}
        />
      <Stack.Screen
        name='login'
        component={Login}
        options={{title:"Ingresar"}}
        />
      <Stack.Screen
        name='register'
        component={Register}
        options={{title:"Registrarse"}}
      />
    </Stack.Navigator>
  )
}
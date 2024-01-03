import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/account/Login'
import Account from '../screens/account/Account'

import Register from '../screens/account/Register'

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='accountsStack'
          component={Account}
          options={{title:"Cuenta"}}          
      />
      <Stack.Screen 
          name='Ingreso'
          component={Login}
          options={{title:"Iniciar sesión"}}
      />
      <Stack.Screen 
          name='Registro'
          component={Register}
          options={{title:"Registro de usuario"}}
      />
    </Stack.Navigator>
  )
}
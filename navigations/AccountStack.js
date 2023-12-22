import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Account/Login'
import Account from '../screens/Account/Account'
import Registration from '../screens/Account/Registration'

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='accountsStack'
          component={Account}
          options={{title:"Cuentas"}}          
      />
      <Stack.Screen 
          name='Ingreso'
          component={Login}
          options={{title:"Iniciar sesión"}}
      />
      <Stack.Screen 
          name='Registro'
          component={Registration}
          options={{title:"Registro de usuario"}}
      />
    </Stack.Navigator>
  )
}
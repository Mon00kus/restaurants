import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import LoginScreen from '../screens/AccountScreen/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='accountsStack'
          component={AccountScreen}
          options={{title:"Cuentas"}}
      />
      <Stack.Screen 
          name='Ingreso'
          component={LoginScreen}
          options={{title:"Iniciar sesión"}}
      />
      <Stack.Screen 
          name='Registro'
          component={RegistrationScreen}
          options={{title:"Registro de usurio"}}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import Top5Screen from '../screens/Top5Screen/Top5Screen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import AccountScreen from '../screens/AccountScreen/AccountScreen'

const bottomTabNavigator = createBottomTabNavigator()

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName
    switch (route.name) {
      case "restaurants":
          iconName = 'compass-outline'
          break
      case "favorites":
          iconName = 'heart-outline'
          break
      case "toprestaurants":
          iconName = "star-outline"
          break
      case "searchs" :
          iconName = "magnify"
          break
      case "accounts":
          iconName = "home-outline"
          break
    }
    return (
      <Icon
          type = "material-community"
          name = {iconName}
          size = {22}
          color = {color}   
      />
    )
  }
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator
         initialRouteName = 'accounts'
         screenOptions={({ route }) => ({
            "tabBarStyle": [{
                "display" : "flex"
            }, null],
            "tabBarIcon": ({ color }) => screenOptions(route, color),
            "tabBarActiveTintColor": "#442484",
            "tabBarInactiveTintColor": "#a17dc3"                
         })}
      >
        <bottomTabNavigator.Screen
                name="restaurants"
                component={RestaurantScreen}
                options={{title:"Restaurantes"}}         
                />
        <bottomTabNavigator.Screen                
            name="favorites"
            component={FavoriteScreen}         
            options={{title:"Favoritos"}}         
            />
        <bottomTabNavigator.Screen                
            name="toprestaurants"
            component={Top5Screen}                
            options={{title:"Top 5"}}         
            />
        <bottomTabNavigator.Screen                
            name="searchs"
            component={SearchScreen}
            options={{title:"Busquedas"}}
            />   
        <bottomTabNavigator.Screen                
            name="accounts"
            component={AccountScreen}
            options={{title:"Cuentas"}}         
            />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  )
}
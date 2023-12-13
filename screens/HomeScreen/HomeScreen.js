import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantScreen from '../RestaurantScreen/RestaurantScreen'
import FavoriteScreen from '../FavoriteScreen/FavoriteScreen'
import Top5Screen from '../Top5Screen/Top5Screen'
import SearchScreen from '../SearchScreen/SearchScreen'
import AccountScreen from '../AccountScreen/AccountScreen'

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
                options={{title:"Restaurantes", headerShown:false}}         
                />
        <bottomTabNavigator.Screen                
            name="favorites"
            component={FavoriteScreen}         
            options={{title:"Favoritos", headerShown:false}}         
            />
        <bottomTabNavigator.Screen                
            name="toprestaurants"
            component={Top5Screen}                
            options={{title:"Top 5", headerShown:false}}         
            />
        <bottomTabNavigator.Screen                
            name="searchs"
            component={SearchScreen}
            options={{title:"Busquedas", headerShown:false}}
            />   
        <bottomTabNavigator.Screen                
            name="accounts"
            component={AccountScreen}
            options={{title:"Cuentas", headerShown:false}}         
            />
      </bottomTabNavigator.Navigator>
    
  )
}
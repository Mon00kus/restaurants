import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantStack from './RestaurantStack'
import FavoriteStack from './FavoritesStack'
import TopStack from './TopStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'

const bottomTabNavigator = createBottomTabNavigator()

export default function Navigation() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const screenOptions = (route, color) => {
    let iconName
    switch (route.name) {
      case "restaurants":
          iconName = 'compass-outline'
          break
      case "favorites":
          iconName = 'heart-outline'
          break
      case "topRestaurants":
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
          name="accounts"
          component={AccountStack}
          options={{title:"Cuentas", headerShown: false}}/>
        <bottomTabNavigator.Screen 
          name="restaurants"
          component={RestaurantStack}
          options={{title:"Restaurantes", headerShown: false}}/>
        <bottomTabNavigator.Screen 
          name="favorites"
          component={FavoriteStack}
          options={{title:"Favoritos", headerShown: false}}/>
        <bottomTabNavigator.Screen
          name="topRestaurants"
          component={TopStack}
          options={{title:"Top\'S", headerShown: false}}
         />
        <bottomTabNavigator.Screen 
          name="searchs"
          component={SearchStack}
          options={{title:"Busquedas", headerShown: false}}/>
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  )
}
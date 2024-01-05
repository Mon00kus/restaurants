
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import AccountStack from './AccountStack'
import RestaurantStack from './RestaurantStack'
import FavoriteStack from './FavoriteStack'
import TopStack from './TopStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator()

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
              size = {35}
              color = {color}   
          />
        )
  }
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName = 'accounts'
            screenOptions={({ route }) => ({
            "tabBarStyle": [{
                "display" : "flex"
            }, null],
            "tabBarIcon": ({ color }) => screenOptions(route, color),
            "tabBarActiveTintColor": "#9f632a",
            "tabBarInactiveTintColor": "#dfa35c"            
            })}
        >
            <Tab.Screen
                name="accounts"
                component={AccountStack}
                options={{title:"Cuentas", headerShown: false}}
            />
            <Tab.Screen
                name="restaurants"
                component={RestaurantStack}
                options={{title:"Lugares", headerShown: false}}
            />
            <Tab.Screen
                name="favorites"
                component={FavoriteStack}
                options={{title:"Favoritos", headerShown: false}}
                />
            <Tab.Screen
                name="topRestaurants"
                component={TopStack}
                options={{title:"Top\'S", headerShown: false}}
                />
            <Tab.Screen
                name="searchs"
                component={SearchStack}
                options={{title:"Busquedas", headerShown: false}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
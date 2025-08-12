import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screen/LoginScreen'
import RegistroScreen from '../screen/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'

import MembresiaDetailScreen from '../screen/MembresiaDetailScreem'
import MainTabs from '../navigation/MainTabs'
import PromoDetailScreen from '../screen/PromoDetailScreen'
const AppStack = createNativeStackNavigator()
const PrivateRouteNavigate = () => (

  <AppStack.Navigator
    initialRouteName='MainTabs'
    screenOptions={{ headerShown: false }}>

    <AppStack.Screen name="MainTabs" component={MainTabs} />
    <AppStack.Screen name="MembresiaDetalle" component={MembresiaDetailScreen} />
    <AppStack.Screen name="PromoDetail" component={PromoDetailScreen} />
  </AppStack.Navigator>
)




export default PrivateRouteNavigate
import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screen/LoginScreen'
import RegistroScreen from '../screen/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecuperarClaveScreen from '../screen/RecuperarClaveScreen'
import VerificarCodigoScreen from '../screen/VerificacionCorreoScreen'
import CambiarClaveScreen from '../screen/CambiarClaveScreen'
const AppStack = createNativeStackNavigator()
const PublicRouteNavigator = () => (
  //cuando el usuario ingrese o inicie estas rutas no las podra ver
  <AppStack.Navigator
    initialRouteName='Login'
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Login" component={LoginScreen} />
    <AppStack.Screen name="Registro" component={RegistroScreen} />
    <AppStack.Screen name="RecuperarClave" component={RecuperarClaveScreen} />
    <AppStack.Screen name="VerificarCorreo" component={VerificarCodigoScreen} />
    <AppStack.Screen name="CambiarClave" component={CambiarClaveScreen} />
  </AppStack.Navigator>
)

export default PublicRouteNavigator
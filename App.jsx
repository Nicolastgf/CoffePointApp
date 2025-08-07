import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import RecuperarClaveScreen from './src/screen/RecuperarClaveScreen';
import VerificarCodigoScreen from './src/screen/VerificacionCorreoScreen';
import CambiarClaveScreen from './src/screen/CambiarClaveScreen';
import MembresiaDetailScreen from './src/screen/MembresiaDetailScreem';
import MainTabs from './src/navigation/MainTabs'; // 👈 contiene las 5 pantallas con navbar

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="RecuperarClave" component={RecuperarClaveScreen} />
        <Stack.Screen name="VerificarCorreo" component={VerificarCodigoScreen} />
        <Stack.Screen name="CambiarClave" component={CambiarClaveScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="MembresiaDetalle" component={MembresiaDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

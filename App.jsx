import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import RecuperarClaveScreen from './src/screen/RecuperarClaveScreen';
import VerificarCodigoScreen from './src/screen/VerificacionCorreoScreen';
import CambiarClaveScreen from './src/screen/CambiarClaveScreen';
import MembresiaDetailScreen from './src/screen/MembresiaDetailScreem';
import MainTabs from './src/navigation/MainTabs'; // 👈 contiene las 5 pantallas con navbar
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FlashMessage from 'react-native-flash-message';
import SendEmailScreen from './src/screen/SendEmailScreen';
import { useAuthSessionStore } from './src/store/authSessionStore';
import { useEffect, useState } from 'react';
import PublicRouteNavigator from './src/routes/PublicRouteNavigator';
import PrivateRouteNavigate from './src/routes/PrivateRouteNavigate';


//vamos a crear el cliente de tasntaquery
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, //Numero de intentos en caso de error
      staleTime: 1000 * 60 * 5, //tiempo en milisegundos que los datos se consideran frescos
      cacheTime: 1000 * 60 * 60
    },
    mutations: {
      retry: 2,
      retryDelay: 1000
    }
  }
});

const Stack = createNativeStackNavigator();

const RootNavigator = ()=>{
  const { token , user} = useAuthSessionStore();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Simular verificación de autenticación
    const checkAuthStatus = async () => {
      try {
        // Aquí puedes agregar lógica adicional como:
        // - Verificar si el token no ha expirado
        // - Hacer una petición al servidor para validar el token
        // - Refrescar el token si es necesario

        if (token) {
          // Verificar expiración del token
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;

            if (payload.exp < currentTime) {
              // Token expirado, cerrar sesión
              console.log('Token expirado, cerrando sesión');
              useAuthSessionStore.getState().logout();
            }
          } catch (error) {
            console.log('Error verificando token:', error);
            useAuthSessionStore.getState().logout();
          }
        }

        // Simular delay de verificación (opcional)
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error('Error verificando autenticación:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [token]);

  //mostrar navegador apropadio segun esta de autenticacion

  const isAuthenticated = token && user;

  return isAuthenticated ?<PrivateRouteNavigate></PrivateRouteNavigate> : <PublicRouteNavigator></PublicRouteNavigator> 
  
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <NavigationContainer>
      
        <RootNavigator/>
       

      
       <FlashMessage position="top" />
    </NavigationContainer>
    </QueryClientProvider>
  );
}

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAuthSessionStore } from '../store/authSessionStore';

const PromoDetailScreen = ({ route }) => {
  const navigation = useNavigation()
  const { promo } = route.params;
  const { user } = useAuthSessionStore();
  console.log(user);

  return (
    <View>
      <Text>PromoDetailScreen</Text>
      <Text>Título: {promo.nombre}</Text>
      <Text>Descripción: {promo.descripcion}</Text>
      <Text>Precio: ${promo.precio}</Text>


      <TouchableOpacity>
        <Text>Generar codigo Qr</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Volver atras</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PromoDetailScreen
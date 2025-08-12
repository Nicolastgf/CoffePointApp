import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardPromoItem from '../promociones/CardPromoItem';
import PromocionCard from '../../data/PromocionCard';
import { useQuery } from '@tanstack/react-query';
import { getPromocionFn } from '../../service/promocionServiceApi';
import { useNavigation } from '@react-navigation/native';

const PromocionesCard = () => {
    const navigation = useNavigation()
    const {data: response, isLoading, isError, error} = useQuery({
        queryKey: ['promocion'],
        queryFn: getPromocionFn
    });

    // ✅ Extraer los datos correctamente
    const promociones = response?.data?.data || [];
    
    console.log('Promociones:', promociones); // ✅ Ahora verás solo el array de productos

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Cargando promociones...</Text>
            </View>
        );
    }

    if (isError) {
        console.error('Error al cargar promociones:', error);
        return (
            <View style={styles.container}>
                <Text>Error al cargar las promociones</Text>
            </View>
        );
    }
    const handleSubmit= (promo)=>{
        console.log("Promo seleccionada:", promo);

        // vamos a redireccion con los datos de la promo elegida
        navigation.navigate('PromoDetail', { promo})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tremendas Promociones</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* ✅ Usar los datos de la API en lugar del mock */}
                {promociones.length > 0 ? (
                    promociones.map((promo) => (
                        <TouchableOpacity onPress={()=>handleSubmit(promo)}>

                        <CardPromoItem
                            key={promo._id}
                            titulo={promo.nombre}
                            descripcion={promo.descripcion}
                            precio={promo.precio}
                            imagen={promo.imagen}
                        />
                            </TouchableOpacity>
                    ))
                ) : (
                    <Text>No hay promociones disponibles</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});

export default PromocionesCard;
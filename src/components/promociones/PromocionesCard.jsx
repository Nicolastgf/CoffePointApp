import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardPromoItem from '../promociones/CardPromoItem';
import PromocionCard from '../../data/PromocionCard';

const PromocionesCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tremendas Promociones</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {PromocionCard.map((promo) => (
                    <CardPromoItem
                        key={promo.id}
                        titulo={promo.titulo}
                        descripcion={promo.descripcion}
                        precio={promo.precio}
                        imagen={promo.imagen}
                    />
                ))}
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

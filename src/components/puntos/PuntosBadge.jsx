import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PuntosBadge = ({ puntos = 2 }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/img/Grano.png')} // debe ser el ícono blanco sin fondo
                style={styles.icon}
                resizeMode="contain"
            />
            <Text style={styles.text}>{puntos}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff', // marrón suave como la primera imagen
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderWidth: 1.5,
    },
    icon: {
        width: 18,     // ⬆️ tamaño más grande
        height: 18,
        marginRight: 6,
    },
    text: {
        color: '#ec407a',          // blanco como en la referencia
        fontWeight: 'bold',
        fontSize: 13,
    },
});

export default PuntosBadge;

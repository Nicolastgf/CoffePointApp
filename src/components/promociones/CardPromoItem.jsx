import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardPromoItem = ({ titulo, descripcion, precio, imagen }) => {
    return (
        <View style={styles.card}>
            <Image source={imagen} style={styles.image} />
            <View style={styles.overlay} />

            <Text style={styles.precio}>${precio}</Text>

            <View style={styles.textContainer}>
                <Text style={styles.descripcion}>
                    {descripcion ? descripcion.toUpperCase() : ''}
                </Text>
                <Text style={styles.titulo}>
                    {titulo ? titulo.toUpperCase() : ''}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#e2d9c9',
        marginRight: 16,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    precio: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#6d4c41',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        fontWeight: 'bold',
        fontSize: 14,
    },
    textContainer: {
        position: 'absolute',
        bottom: 12,
        left: 12,
    },
    descripcion: {
        color: '#fff',
        fontSize: 12,
    },
    titulo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CardPromoItem;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BarraPuntos = ({ puntosActuales = 2, puntosObjetivo = 5 }) => {
    const progreso = puntosActuales / puntosObjetivo;

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Mis puntos</Text>
            </View>

            {/* Contenido con progreso */}
            <View style={styles.content}>
                <Text style={styles.puntosTexto}>{`${puntosActuales}/${puntosObjetivo}`}</Text>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { flex: progreso }]} />
                    <View style={{ flex: 1 - progreso }} />
                </View>

                {/* Icono de café + texto */}
                <View style={styles.recompensaContainer}>
                    <Image
                        source={require('../../../assets/img/Grano.png')} // Icono de vaso de café
                        style={styles.cafeIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.recompensaTexto}>Free{"\n"}Coffee</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#ec407a',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    puntosTexto: {
        color: '#333',
        marginRight: 8,
        fontSize: 14,
    },
    progressBar: {
        flex: 1,
        height: 16,
        backgroundColor: '#e0dcd7',
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    progressFill: {
        backgroundColor: '#ec407a',
        height: '100%',
        borderRadius: 10,
    },
    recompensaContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 8,
    },
    cafeIcon: {
        width: 24,
        height: 24,
        marginBottom: 2,
    },
    recompensaTexto: {
        fontSize: 10,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 12,
    },
});

export default BarraPuntos;

import React from 'react';
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import promociones from '../../data/Promocion'; // Ajustá si la ruta varía

const { width } = Dimensions.get('window');

const PromoCarousel = () => {
    return (
        <View style={styles.container}>
            <Carousel
                width={width * 0.9}
                height={180}
                data={promociones}
                autoPlay
                loop
                autoPlayInterval={5000}
                scrollAnimationDuration={800}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.imagen} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.description}>{item.descripcion}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: '#eee',
        fontSize: 13,
        marginTop: 4,
    },
});

export default PromoCarousel;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomNavigationBar from '../components/navbar/NavBar';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Bienvenido a CoffeePoint ☕</Text>
                <Text style={styles.subtitle}>¡Disfrutá nuestras promociones y beneficios!</Text>
            </View>

            {/* Imagen decorativa (opcional) */}
            <Image
                source={require('../../assets/logo/CoffePoint.png')}
                style={styles.image}
            />

            {/* Contenido principal */}
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Promociones destacadas</Text>
                {/* Acá irían las cards de promociones */}
            </View>

            {/* Navigation bar */}
            <BottomNavigationBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ec',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3e2723',
    },
    subtitle: {
        fontSize: 16,
        color: '#6d4c41',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    content: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});

export default HomeScreen;

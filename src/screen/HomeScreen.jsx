import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavigationBar from '../components/navbar/NavBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header/Header';
import WelcomeHeader from '../components/welcome/BienvenidoHeader';
import PuntosBadge from '../components/puntos/PuntosBadge';
import BarraPuntos from '../components/puntos/BarraPuntos';
import PromoCarousel from '../components/promociones/PromoCarousel';
import PromocionesCard from '../components/promociones/PromocionesCard';
import { useAuthSessionStore } from '../store/authSessionStore';

//LAZY LOAD ---> CARGA PEREZOSA
//CASCADIE CODE --> CARGA DE ENTRADA
const HomeScreen =  () => {
    const { user } = useAuthSessionStore();
    console.log(user)
    const navigation = useNavigation();

    return (
        <>
            {/* Header fijo arriba */}
            <Header navigation={navigation} />

            <View style={styles.container}>
                {/* Fila: Bienvenida + Puntos */}
                <View style={styles.headerRow}>
                    <WelcomeHeader username={user.nombre} />
                    <PuntosBadge puntos={user.puntos} />
                </View>

                {/* Barra de progreso de puntos */}
                <BarraPuntos puntosActuales={user.puntos} puntosObjetivo={5} />

                {/* Carrusel de promociones */}
                <PromoCarousel navigation={navigation} />

                <View style={styles.content}>
                    <PromocionesCard navigation={navigation}/>
                </View>
                {/* Barra de navegación inferior */}
                <BottomNavigationBar navigation={navigation} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ec',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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

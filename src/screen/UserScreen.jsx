import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/header/Header';
import BottomNavigationBar from '../components/navbar/NavBar';
import PerfilOption from '../components/perfil/PerfilOption';
import CerrarSesion from '../components/perfil/CerrarSesion';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <Header navigation={navigation} />

            <ScrollView style={styles.container}>
                {/* Info de usuario */}
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/img/Grano.png')}
                        style={styles.avatar}
                    />
                    <Text style={styles.username}>Daniel Martínez</Text>
                    <Text style={styles.email}>daniel@gmail.com</Text>
                </View>

                {/* Opciones */}
                <View style={styles.options}>
                    <PerfilOption
                        icon="person-outline"
                        label="Mi perfil"
                        onPress={() => navigation.navigate('Perfil')}
                    />
                    <PerfilOption
                        icon="card-outline"
                        label="Mis membresías"
                        onPress={() => navigation.navigate('Membresias')}
                    />
                    <PerfilOption
                        icon="time-outline"
                        label="Historial"
                        onPress={() => navigation.navigate('Historial')}
                    />
                </View>

                {/* Cerrar sesión */}
                <CerrarSesion onPress={() => console.log('Cerrando sesión...')} />
            </ScrollView>

            {/* Navbar */}
            <BottomNavigationBar navigation={navigation} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 14,
        color: '#777',
    },
    options: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
});

export default UserScreen;

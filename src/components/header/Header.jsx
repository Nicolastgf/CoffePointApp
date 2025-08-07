import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const Header = ({ onMenuPress, showMenu = true, onClosePress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                {/* Izquierda: botón hamburguesa o cruz */}
                {showMenu ? (
                    <TouchableOpacity onPress={onMenuPress}>
                        <Feather name="menu" size={28} color="black" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onClosePress}>
                        <Ionicons name="close" size={28} color="white" />
                    </TouchableOpacity>
                )}

                {/* Logo centrado */}
                <Image
                    source={require('../../../assets/logo/LogoCoffeNombre.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Espacio a la derecha para alinear visualmente */}
                <View style={{ width: 28 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#DF1A5D',
        height: 100,
        justifyContent: 'center',
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    logo: {
        width: 170,
        height: 200,
        marginLeft: 20,
    },
});

export default Header;

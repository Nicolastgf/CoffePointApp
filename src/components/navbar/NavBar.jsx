import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar = () => {
    const navigation = useNavigation();
    const [active, setActive] = useState('home');

    const handlePress = (screen) => {
        setActive(screen);
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress('Home')}>
                <Ionicons name="home-outline" size={26} color={active === 'home' ? '#FFD700' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Buscar')}>
                <Feather name="search" size={26} color={active === 'buscar' ? '#FFD700' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Tienda')}>
                <MaterialIcons name="shopping-bag" size={26} color={active === 'tienda' ? '#FFD700' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Perfil')}>
                <Ionicons name="person-outline" size={26} color={active === 'perfil' ? '#FFD700' : '#000'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        elevation: 10, // sombra Android
        shadowColor: '#000', // sombra iOS
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});

export default BottomNavigationBar;

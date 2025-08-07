import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeHeader = ({ username = "Usuario" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.saludo}>
                Bienvenido <Text style={styles.username}>{username}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0, // ya no se necesita tanto padding
        paddingTop: 0,
        marginTop: -5,         // 🔼 sube el texto
        marginLeft: 5,        // ◀️ mueve hacia la izquierda
    },
    saludo: {
        fontSize: 16,
        color: '#000',
    },
    username: {
        fontWeight: 'bold',
        color: '#3e2723',
    },
});

export default WelcomeHeader;

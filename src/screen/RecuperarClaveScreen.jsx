import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const RecuperarClaveScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Flecha de volver */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Logo o imagen */}
            <Image source={require('../../assets/img/Candado1.png')} style={styles.nombre1} />
            <Text style={styles.nombreApp}>COFFE<Text style={{ fontWeight: '400' }}>CLAVE</Text></Text>

            {/* Título */}
            <Text style={styles.title}>Recuperar contraseña</Text>

            {/* Instrucciones */}
            <Text style={styles.description}>
                Ingrese su dirección de correo electrónico para recibir instrucciones
                de recuperación.
            </Text>

            {/* Input de correo */}
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#ccc" style={styles.icon} />
                <TextInput
                    placeholder="Correo electrónico"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    style={styles.input}
                />
            </View>

            {/* Botón enviar */}
            <TouchableOpacity
                style={styles.sendButton}
                onPress={() => navigation.navigate('VerificarCorreo')}
            >
                <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>

            {/* Otras opciones */}
            <TouchableOpacity>
                <Text style={styles.tryAnother}>¿Querés probar otra forma?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ec',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
    },
    nombre1: {
        width: 500, // Aumentado
        height: 350, // Aumentado
        resizeMode: 'contain',
        marginBottom: 10,
    },
    nombreApp: {
        fontSize: 34, // Aumentado
        fontWeight: '900',
        marginTop: 0, // Subido más cerca del candado
        color: '#000',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ec407a',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    sendButton: {
        backgroundColor: '#DF1A5D',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 40,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tryAnother: {
        color: '#ec407a',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});

export default RecuperarClaveScreen;

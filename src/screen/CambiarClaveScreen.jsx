import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CambiarClaveScreen = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Flecha atrás */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Imagen */}

            <Image source={require('../../assets/img/Candado2.png')} style={styles.nombre} />

            {/* Título */}
            <Text style={styles.title}>Crear nueva contraseña</Text>

            {/* Descripción */}
            <Text style={styles.description}>
                Su nueva contraseña debe ser diferente de las contraseñas utilizadas anteriormente.
            </Text>

            {/* Input Nueva Clave */}
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
                <TextInput
                    placeholder="Nueva contraseña"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!passwordVisible}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Ionicons
                        name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#ccc"
                    />
                </TouchableOpacity>
            </View>

            {/* Input Confirmar Clave */}
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
                <TextInput
                    placeholder="Confirmar contraseña"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!confirmVisible}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setConfirmVisible(!confirmVisible)}>
                    <Ionicons
                        name={confirmVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#ccc"
                    />
                </TouchableOpacity>
            </View>

            {/* Cambiar Clave Texto */}
            <TouchableOpacity>
                <Text style={styles.changeText}>Cambiar contraseña</Text>
            </TouchableOpacity>

            {/* Botón Guardar */}
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ec',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
    },
    nombre: {
        width: 500,
        height: 350,
        resizeMode: 'contain',
        marginBottom: 10,
    }, arginBottom: 10,

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
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
    changeText: {
        color: '#ec407a',
        textDecorationLine: 'underline',
        fontSize: 14,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#DF1A5D',
        paddingVertical: 12,
        borderRadius: 30,
        paddingHorizontal: 50,
        width: '100%',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CambiarClaveScreen;

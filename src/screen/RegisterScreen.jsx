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
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const RegistroScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../../assets/logo/LogoCoffeNombre.png')} // reemplazalo por tu logo real
                style={styles.logo}
            />

            <Text style={styles.subtitulo}>Crear una cuenta para continuar</Text>

            {/* Correo */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Correo</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#ccc" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Ingrese su correo"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                        keyboardType="email-address"
                    />
                </View>
            </View>

            {/* Nombre completo */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Nombre completo</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={20} color="#ccc" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                    />
                </View>
            </View>

            {/* Contraseña */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <View style={styles.inputContainer}>
                    <EvilIcons name="lock" size={30} color="#ccc" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Ingrese su contraseña"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="#ccc" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Repetir Contraseña */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Repetir Contraseña</Text>
                <View style={styles.inputContainer}>
                    <EvilIcons name="lock" size={30} color="#ccc" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Reingrese su contraseña"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                        secureTextEntry={!repeatPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}>
                        <Ionicons name={repeatPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="#ccc" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Botón de registro */}
            <View style={{ width: '80%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>

            {/* Ya tenés cuenta */}
            <View style={styles.loginRedirectContainer}>
                <Text style={styles.registerText}>
                    ¿Ya tienes una cuenta?{' '}
                    <Text
                        style={styles.registerLink}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Iniciar sesión
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f4f1ec',
    },
    logo: {
        width: 190,
        height: 60,
        resizeMode: 'contain',
        marginTop: 80,
    },
    subtitulo: {
        marginVertical: 20,
        fontSize: 16,
        color: '#747373',
    },
    formContainer: {
        marginTop: 20,
        width: '80%',
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 25,
        backgroundColor: '#f4f1ec',
        color: '#ec407a',
        fontSize: 15,
        paddingHorizontal: 5,
        zIndex: 1,
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: '#ec407a',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    input: {
        fontSize: 16,
        flex: 1,
        color: '#333',
    },
    registerButton: {
        backgroundColor: '#DF1A5D',
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 30,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    registerButtonText: {
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
    },
    loginRedirectContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    registerText: {
        fontSize: 16,
        color: '#333',
    },
    registerLink: {
        color: '#ec407a',
        fontWeight: 'bold',
    },
});

export default RegistroScreen;

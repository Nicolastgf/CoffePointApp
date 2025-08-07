import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../../assets/logo/CoffePoint.png')}
                style={styles.logo}
            />

            {/* Nombre App */}
            <Text style={styles.nombreApp}>COFFE<Text style={{ fontWeight: '400' }}>POINT</Text></Text>

            {/* Contenido subido */}
            <View style={styles.contentContainer}>
                <Text style={styles.subtitulo}>Hola, inicie sesión para continuar</Text>

                {/* Input CORREO */}
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

                {/* Input CONTRASEÑA */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                    <View style={styles.inputContainer}>
                        <EvilIcons name="lock" size={30} color="#ccc" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Ingrese su clave"
                            placeholderTextColor="#aaa"
                            style={styles.input}
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Ionicons
                                name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                                size={24}
                                color="#ccc"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Olvidé contraseña y Login */}
                <View style={styles.olvideClaveContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('RecuperarClave')}>
                        <Text style={styles.olvideClaveText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('MainTabs')} // ✅ esto es lo correcto
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.continue}>
                        <Text style={styles.socialDivider}>o continuar con una cuenta social</Text>
                    </View>
                </View>

                {/* Botón Google */}
                <View style={styles.googleButtonContainer}>
                    <TouchableOpacity style={styles.googleButton}>
                        <AntDesign name="google" size={20} color="#ec407a" style={styles.googleIcon} />
                        <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>

                {/* Botón Apple */}
                <View style={styles.appleButtonContainer}>
                    <TouchableOpacity style={styles.appleButton}>
                        <AntDesign name="apple1" size={20} color="#000" style={styles.appleIcon} />
                        <Text style={styles.appleText}>Sign in with Apple</Text>
                    </TouchableOpacity>
                </View>

                {/* Registro */}
                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>
                        ¿No tienes una cuenta?{' '}
                        <Text
                            style={styles.registerLink}
                            onPress={() => navigation.navigate('Registro')}
                        >
                            Registrarse
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 200,
        resizeMode: 'contain',
        marginTop: 60,
        marginBottom: 10,
    },
    nombreApp: {
        fontSize: 34,
        fontWeight: '900',
        color: '#000',
        marginBottom: 10,
    },
    contentContainer: {
        marginTop: -30,
        width: '100%',
        alignItems: 'center',
    },
    subtitulo: {
        marginVertical: 20,
        fontSize: 16,
        color: "#747373ff",
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
    olvideClaveContainer: {
        width: '80%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    olvideClaveText: {
        color: '#ec407a',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#DF1A5D',
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    loginText: {
        fontSize: 19,
        textAlign: "center"
    },
    continue: {
        textAlign: "center",
        width: '100%',
    },
    socialDivider: {
        marginTop: 30,
        marginBottom: 15,
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    googleButtonContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 15,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#cecccdff',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        width: '100%',
    },
    googleIcon: {
        marginRight: 10,
    },
    googleText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    appleButtonContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 15,
    },
    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#cecccdff',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        width: '100%',
    },
    appleIcon: {
        marginRight: 10,
    },
    appleText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    registerContainer: {
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

export default LoginScreen;

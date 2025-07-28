import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const VerificarCodigoScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleVerify = () => {
        if (code.every((digit) => digit !== '')) {
            navigation.navigate('CambiarClave');
        } else {
            Alert.alert('Código incompleto', 'Por favor ingresá los 4 dígitos del código.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                {/* Flecha atrás */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('RecuperarClave')}
                    style={styles.backButton}
                >
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                {/* Imagen sobre */}
                <Image
                    source={require('../../assets/img/Sobre1.png')}
                    style={styles.nombre}
                />

                {/* Título */}
                <Text style={styles.title}>Verificar tu correo</Text>

                {/* Instrucción */}
                <Text style={styles.subtitle}>
                    Ingresá el código de 4 dígitos que enviamos a tu correo electrónico.
                </Text>

                {/* Inputs */}
                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={styles.codeInput}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                        />
                    ))}
                </View>

                {/* Reenviar */}
                <TouchableOpacity>
                    <Text style={styles.resend}>¿No recibiste el código? Reenviar</Text>
                </TouchableOpacity>

                {/* Botón verificar */}
                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyButtonText}>Verificar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f1ec',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 40, // agrega espacio para el botón
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    codeInput: {
        width: 50,
        height: 55,
        borderBottomWidth: 2,
        borderColor: '#DF1A5D',
        textAlign: 'center',
        fontSize: 22,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    resend: {
        color: '#ec407a',
        textDecorationLine: 'underline',
        marginBottom: 20,
        fontSize: 14,
    },
    verifyButton: {
        backgroundColor: '#DF1A5D',
        paddingVertical: 12,
        borderRadius: 30,
        paddingHorizontal: 50,
        width: '100%',
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default VerificarCodigoScreen;

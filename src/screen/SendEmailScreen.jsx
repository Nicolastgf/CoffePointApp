import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { resendCodeFn } from '../service/userServiceApi';
import { showMessage } from 'react-native-flash-message';

export default function SendEmailScreen() {
  //RHF-------------------------------------
  const { control, handleSubmit: onSubmitRHF, formState: { errors }, reset, setError, watch, setValue } = useForm({
    defaultValues: {
      email: ''
    }
  });

  //TQUERY------------------------------------
  const { mutate: sendCodeEmail, isLoading, isError, error, isPending} = useMutation({
    mutationFn: resendCodeFn,
    onSuccess:()=>{
       showMessage({
              message: '¡Éxito!',
              description: 'El Codigo de verififacion fue enviado con exito verifique su casilla de mensajes.',
              type: 'success',
              backgroundColor: '#556B2F',
              color: '#fff',
              icon: 'success',
              duration: 4000,
              onPress: () => Linking.openURL('mailto:')
            })

            reset();
          
    },
    onError:()=>{

    }
  })

  const handleSubmit = (data)=>{
    console.log("Datos del formulario:", data);
    const email = data.email;
    sendCodeEmail(email);
    // Aquí puedes manejar la lógica después de enviar el código
  }
  return (
    <View style={styles.container}>
      {/* Logo */}

      {/* Nombre App */}
      <Text style={styles.nombreApp}>
        COFFE<Text style={{ fontWeight: '400' }}>POINT</Text>
      </Text>

      {/* Contenido subido */}
      <View style={styles.contentContainer}>
        <Text style={styles.subtitulo}>Hola, ingrese su email para reenviar el codigo</Text>

        {/* Input CORREO */}
       <View style={styles.formContainer}>
        <Text style={styles.label}>Correo</Text>
        <Controller
          control={control}
          name='email'
          rules={{
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'El correo no es válido'
            },
            minLength: { value: 5, message: 'El correo debe tener al menos 5 caracteres' },
            maxLength: { value: 50, message: 'El correo debe tener como máximo 50 caracteres' }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#ccc" style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Ingrese su correo"
                placeholderTextColor="#aaa"
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType="email-address"
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

        {/* Olvidé contraseña y Login */}
        <View style={styles.olvideClaveContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={onSubmitRHF(handleSubmit)} 
          >
            <Text style={styles.loginText}> {isPending ? "Enviando..." : "Enviar"}</Text>
          </TouchableOpacity>
        </View>

        {/* Registro */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 130
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
    textAlign: "center",
    color: '#fff', // Agregué el color blanco para el texto del botón
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
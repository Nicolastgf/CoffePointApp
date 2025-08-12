import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserFn, postUserFn } from '../../service/userServiceApi';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm() {
  // Estados para visibilidad de contraseñas
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const naviagation = useNavigation();
  //RHF---------------------------------
  const { control, handleSubmit: onSubmitRHF, formState: { errors }, reset, setError, watch, setValue } = useForm({
    defaultValues: {
      email: '',
      nombre: '',
      contraseña: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })
  //TQUERY---------------------------------
  const { mutate: postUsuario, isLoading, isError, error, isPending } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      //mostramos el mensaje de exito
      showMessage({
        message: '¡Éxito!',
        description: 'Usuario registrado correctamente. Revisa tu email para verificar tu cuenta.',
        type: 'success',
        backgroundColor: '#556B2F',
        color: '#fff',
        icon: 'success',
        duration: 4000,
        onPress: () => Linking.openURL('mailto:')
      })
      //liamos el formulario
      reset();

      //ahora redirigimos al usuario a la pantalla para ignresar el codigo de verificaicon
      setTimeout(()=>{
        //navemgos a la pantalla de verificaion de correo
        //y le agregamos un timempo para que cambide pantalla
        naviagation.navigate('VerificarCorreo');

      },3000)
    },
    onError: (error) => { }
  })

  //HANDLERS
  const handleSubmit = (data) => {
    console.log("Datos del formulario:", data);
    postUsuario(data);

  }

  return (
    <View>
      {/* Correo */}
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

      {/* Nombre completo */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre completo</Text>
        <Controller
          control={control}
          name='nombre'
          rules={{
            required: 'El nombre completo es obligatorio',
            minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
            maxLength: { value: 50, message: 'El nombre debe tener como máximo 50 caracteres' }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#ccc" style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Ingrese su nombre completo"
                placeholderTextColor="#aaa"
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </View>
          )}
        />
        {errors.nombre && <Text style={styles.errorText}>{errors.nombre.message}</Text>}
      </View>

      {/* Contraseña */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <Controller
          control={control}
          name='contraseña'
          rules={{
            required: 'La contraseña es obligatoria',
            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
            maxLength: { value: 20, message: 'La contraseña debe tener como máximo 20 caracteres' }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <EvilIcons name="lock" size={30} color="#ccc" style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Ingrese su contraseña"
                placeholderTextColor="#aaa"
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="#ccc" />
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.contraseña && <Text style={styles.errorText}>{errors.contraseña.message}</Text>}
      </View>

      {/* Repetir Contraseña */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Repetir Contraseña</Text>
        <Controller
          control={control}
          name='confirmPassword'
          rules={{
            required: 'Debe repetir la contraseña',
            validate: value => value === watch('contraseña') || 'Las contraseñas no coinciden'
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <EvilIcons name="lock" size={30} color="#ccc" style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Reingrese su contraseña"
                placeholderTextColor="#aaa"
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={!repeatPasswordVisible}
              />
              <TouchableOpacity onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}>
                <Ionicons name={repeatPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="#ccc" />
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
      </View>

      {/* Botón Registrarse */}
      <View style={{ width: '80%', alignItems: 'center' }}>
        <TouchableOpacity style={styles.registerButton} onPress={onSubmitRHF(handleSubmit)}>
          <Text style={styles.registerButtonText}>{isPending ? 'Cargando...' : 'Crear cuenta'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

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
    width: 'auto',
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
    width: '100%',
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 14,
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
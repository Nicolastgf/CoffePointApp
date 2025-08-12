import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { postLoginFn } from '../../service/authServiceApi';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

export default function LoginForm() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  //RHF-------------------------------
  const { control, handleSubmit: onSubmitRHF, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
      contraseña: '',
    },
    mode: 'onChange'
  })

  //TQUERY-------------------------------
  const { mutate: postLogin, isPending, isError, error, setError } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      console.log("✅ Login exitoso desde componente:", data);
      Alert.alert("Éxito", "Login exitoso");
      navigation.navigate('MainTabs');
      reset();
    },
    onError: (error) => {
      console.log(error)
      if (error.status === 401 && error.error.includes("Cuenta no verificada")) {
        setError('email', {
          type: 'server',
          message: 'Cuenta no verificada. Por favor verifica tu correo electrónico.'
        })
      }

    }
  })

  //Handlers-----------------------
  const handleSubmit = (data) => {
    console.log("📋 Datos enviados desde form:", data);
    postLogin(data);
  }

  return (
    <View style={styles.contentContainer}>
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
                autoCapitalize="none"
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

      {/* Input CONTRASEÑA */}
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
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="#ccc" />
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.contraseña && <Text style={styles.errorText}>{errors.contraseña.message}</Text>}
      </View>

      {/* Olvidé contraseña y Login */}
      <View style={styles.olvideClaveContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarClave')}>
          <Text style={styles.olvideClaveText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        {isError && error && !error.field && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {error?.error || 'Intenta nuevamente'}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={[styles.loginButton, isPending && styles.loginButtonDisabled]}
          onPress={() => {

            onSubmitRHF(handleSubmit)();
          }}
          disabled={isPending}
        >

          <Text style={styles.loginText}>
            {isPending ? 'Cargando...' : 'Login'}
          </Text>
        </TouchableOpacity>

        <View style={styles.continue}>
          <Text style={styles.socialDivider}>o continuar con una cuenta social</Text>
        </View>
      </View>

      {/* Mostrar errores de la API */}

    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: -30,
    width: '100%',
    alignItems: 'center',
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
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 14,
  },
  errorContainer: {
    width: '80%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffebee',
    borderRadius: 5,
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
  loginButtonDisabled: {
    backgroundColor: '#ccc',
  },
  loginText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
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
});
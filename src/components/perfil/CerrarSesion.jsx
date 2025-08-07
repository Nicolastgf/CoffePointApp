import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CerrarSesion = () => {
    const handleLogout = () => {
        // Lógica real de cierre de sesión (ej: limpiar tokens, redirigir a login)
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro que querés cerrar sesión?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sí, salir", onPress: () => console.log("Sesión cerrada") },
            ]
        );
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#DF1A5D" />
            <Text style={styles.text}>Cerrar sesión</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 12,
        marginTop: 20,
    },
    text: {
        marginLeft: 10,
        color: "#DF1A5D",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default CerrarSesion;

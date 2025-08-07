import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    StatusBar,
} from "react-native";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

const MembresiaCardExpandible = ({ item, onClose }) => {
    const translateY = useSharedValue(height);

    useEffect(() => {
        translateY.value = withTiming(0, { duration: 300 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    const cerrarCard = () => {
        translateY.value = withTiming(height, { duration: 300 });
        setTimeout(onClose, 300);
    };

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <StatusBar barStyle="light-content" backgroundColor="#EC407A" />

            <View style={styles.card}>
                <Text style={styles.title}>{item.tipo}</Text>

                <Text style={styles.descripcion}>
                    {item.descripcionLarga ||
                        "Accedé a beneficios premium con esta membresía exclusiva."}
                </Text>

                <Text style={styles.precio}>Precio: ${item.precio || "Consultar"}</Text>

                <TouchableOpacity style={styles.botonComprar}>
                    <Text style={styles.botonTexto}>Comprar Membresía</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={cerrarCard} style={styles.cerrar}>
                    <Text style={styles.cerrarTexto}>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export default MembresiaCardExpandible;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        zIndex: 999,
    },
    card: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 16,
        textAlign: "center",
    },
    descripcion: {
        fontSize: 16,
        color: "#555",
        marginBottom: 24,
        textAlign: "center",
    },
    precio: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 30,
        color: "#000",
    },
    botonComprar: {
        backgroundColor: "#EC407A",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 20,
    },
    botonTexto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    cerrar: {
        marginTop: 10,
    },
    cerrarTexto: {
        color: "#EC407A",
        fontSize: 14,
        fontWeight: "600",
    },
});

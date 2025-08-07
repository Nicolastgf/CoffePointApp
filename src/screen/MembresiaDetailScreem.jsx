import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

// Importamos los logos manualmente
import logoCoffeStar from "../../assets/logo/LogoCoffeStar.png";
import logoBirka from "../../assets/logo/LogoBirka.png";
import logoKobak from "../../assets/logo/LogKobak.png";
import logoForchetta from "../../assets/logo/LogoForcheta.png";

import Header from "../components/header/Header";

const { width, height } = Dimensions.get("window");

const MembresiaDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { membresia } = route.params;

    return (
        <ImageBackground
            source={membresia.fondo}
            style={styles.background}
            resizeMode="cover"
        >
            {/* Header sin hamburguesa y con botón X */}
            <Header showMenu={false} onClosePress={() => navigation.goBack()} />

            <View style={styles.overlay}>
                <BlurView intensity={50} tint="light" style={styles.card}>
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.tipo}>{membresia.tipo}</Text>
                            <Text style={styles.precio}>{membresia.precio}</Text>
                            <Text style={styles.descripcion}>
                                {membresia.descripcionlarga}
                            </Text>

                            <View style={styles.ubicacionesContainer}>
                                <Text style={styles.ubicacionTitle}>Dónde canjear:</Text>

                                <View style={styles.ubicacionesLogos}>
                                    <Image
                                        source={logoCoffeStar}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={logoBirka}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={logoKobak}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={logoForchetta}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Obtener Membresía</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width,
        height,
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
    },
    card: {
        padding: 24,
        height: 550,
        borderRadius: 30,
        marginBottom: 30,
        overflow: "hidden",
        backgroundColor: "rgba(46, 44, 44, 0.52)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "space-between",
    },
    tipo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    precio: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 15,
    },
    descripcion: {
        fontSize: 16,
        color: "#f0f0f0",
        marginBottom: 20,
    },
    ubicacionesContainer: {
        marginBottom: 20,
    },
    ubicacionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    ubicacionesLogos: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    logo: {
        width: 60,
        height: 70,
        marginRight: 10,
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default MembresiaDetailScreen;

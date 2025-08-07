import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Platform,
    LayoutAnimation,
    UIManager,
} from "react-native";
import MembresiaCardExpandible from "./MembresiaCardExpandible"; // Asegurate de tener este archivo creado

const windowWidth = Dimensions.get("window").width;

if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MembresiaItem = ({ item }) => {
    const [expandir, setExpandir] = useState(false);

    const toggleExpandir = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandir(!expandir);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.cardContainer}>
                {/* Imagen destacada */}
                <View style={styles.imageWrapper}>
                    <Image
                        source={item.fondo || item.imagen}
                        style={styles.image}
                    />
                </View>

                {/* Info */}
                <View style={styles.content}>
                    <Text style={styles.title}>{item.tipo}</Text>
                    <Text style={styles.description}>{item.descripcion}</Text>
                </View>

                {/* Botón */}
                <TouchableOpacity style={styles.button} onPress={toggleExpandir}>
                    <Text style={styles.buttonText}>
                        {expandir ? "Cerrar" : "Obtener Membresía"}
                    </Text>
                </TouchableOpacity>

                {/* Card expandible */}
                {expandir && (
                    <MembresiaCardExpandible item={item} onClose={toggleExpandir} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8F5F0",
        height: Platform.OS === "ios" ? 600 : 800,
    },
    cardContainer: {
        width: 350,
        height: 480,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        position: "relative",
        overflow: "visible",
        paddingTop: 150,
    },
    imageWrapper: {
        position: "absolute",
        top: -150,
        width: 300,
        height: 300,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 6,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    content: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        marginBottom: 60,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
        marginTop: 15,
        textAlign: "center",
        alignSelf: "center",
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#EC407A",
        paddingVertical: 16,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default MembresiaItem;

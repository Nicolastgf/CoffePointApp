import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardCanje = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.imagen} style={styles.image} resizeMode="contain" />
            <Text style={styles.puntos}>{item.puntos}g</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 90,
        height: 100,
        borderRadius: 12,
        backgroundColor: "#A57B5B",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    image: {
        width: 40,
        height: 40,
        marginBottom: 6,
    },
    puntos: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default CardCanje;

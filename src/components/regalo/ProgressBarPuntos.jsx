import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBarPuntos = ({ puntos, total }) => {
    const porcentaje = Math.min((puntos / total) * 100, 100);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>COFFEPOINT</Text>
                <Text style={styles.puntos}>{puntos} Granos de Café</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${porcentaje}%` }]} />
            </View>
            <Text style={styles.label}>Canjealos por un riquísimo café</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    puntos: {
        fontWeight: "bold",
        color: "#A57B5B",
    },
    progressBar: {
        height: 12,
        backgroundColor: "#eee",
        borderRadius: 6,
        overflow: "hidden",
    },
    progress: {
        height: 12,
        backgroundColor: "#A57B5B",
    },
    label: {
        marginTop: 6,
        fontSize: 12,
        color: "#666",
    },
});

export default ProgressBarPuntos;

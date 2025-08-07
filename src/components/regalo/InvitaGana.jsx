import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InvitaGana = ({ codigo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Invitá y ganá</Text>
            <Text style={styles.description}>Por cada persona que invites y se registre, ganás 1 grano de café.</Text>

            <View style={styles.codeContainer}>
                <Ionicons name="gift-outline" size={24} color="#A57B5B" />
                <TextInput value={codigo} editable={false} style={styles.code} />
                <TouchableOpacity style={styles.copyButton}>
                    <Text style={styles.copyText}>Copiar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Compartí tu código con amigos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginTop: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        marginBottom: 16,
        color: "#555",
    },
    codeContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        padding: 10,
    },
    code: {
        flex: 1,
        marginHorizontal: 8,
        fontWeight: "bold",
        color: "#A57B5B",
    },
    copyButton: {
        backgroundColor: "#A57B5B",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    copyText: {
        color: "#fff",
        fontWeight: "bold",
    },
    label: {
        marginTop: 12,
        fontSize: 12,
        color: "#777",
        textAlign: "center",
    },
});

export default InvitaGana;

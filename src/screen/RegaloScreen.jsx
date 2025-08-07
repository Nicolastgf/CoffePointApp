import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/header/Header";
import BottomNavigationBar from "../components/navbar/NavBar";

import ProgressBarPuntos from "../components/regalo/ProgressBarPuntos";
import CardCanje from "../components/regalo/CardCanje";
import InvitaGana from "../components/regalo/InvitaGana";

// Simulación de datos de canje
const canjes = [
    { id: "1", puntos: 10, imagen: require("../../assets/img/Grano.png") },
    { id: "2", puntos: 10, imagen: require("../../assets/img/Grano.png") },
    { id: "3", puntos: 10, imagen: require("../../assets/img/Grano.png") },
    { id: "4", puntos: 20, imagen: require("../../assets/img/Grano.png") },
    { id: "5", puntos: 20, imagen: require("../../assets/img/Grano.png") },
    { id: "6", puntos: 20, imagen: require("../../assets/img/Grano.png") },
];

const RegaloScreen = () => {
    const navigation = useNavigation();
    const puntosUsuario = 20; // Simulado
    const codigoInvitacion = "coffeepoint123";

    return (
        <>
            {/* Header fijo arriba */}
            <Header navigation={navigation} />

            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>GRANOS</Text>
                    <Text style={styles.subtitle}>POINTS</Text>
                    <Text style={styles.descripcion}>
                        Coleccioná granos de café para luego canjearlos y obtener muchos premios
                    </Text>

                    <ProgressBarPuntos puntos={puntosUsuario} total={50} />

                    <Text style={styles.sectionTitle}>Con 10 Granos de Café</Text>
                    <FlatList
                        horizontal
                        data={canjes.filter(item => item.puntos === 10)}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardCanje item={item} />}
                        contentContainerStyle={styles.cardRow}
                        showsHorizontalScrollIndicator={false}
                    />

                    <Text style={styles.sectionTitle}>Con 20 Granos de Café</Text>
                    <FlatList
                        horizontal
                        data={canjes.filter(item => item.puntos === 20)}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CardCanje item={item} />}
                        contentContainerStyle={styles.cardRow}
                        showsHorizontalScrollIndicator={false}
                    />

                    <InvitaGana codigo={codigoInvitacion} />
                </ScrollView>

                {/* Bottom Nav fijo */}
                <BottomNavigationBar navigation={navigation} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F0EC",
    },
    scrollContent: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 100, // para que el scroll no quede tapado por navbar
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 10,
        color: "#A57B5B",
        fontWeight: "bold",
    },
    descripcion: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    cardRow: {
        paddingBottom: 10,
    },
});

export default RegaloScreen;

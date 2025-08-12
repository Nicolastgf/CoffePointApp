import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Navbar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import MembresiaCarousel from "../components/membresia/MembresiaCarousel";
import { useAuthSessionStore } from "../store/authSessionStore";

const QrScreen = () => {
  const { user} = useAuthSessionStore();
  console.log(user);
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Pantalla de Membresías</Text>
        <MembresiaCarousel />
      </ScrollView>

      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F0",
  },
  scroll: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default QrScreen;

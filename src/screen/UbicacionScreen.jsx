import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SucursalData } from '../data/SucursalesData';
import BottomNavigationBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';

const { width } = Dimensions.get('window');

const UbicacionScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mapRef = useRef(null);
    const flatListRef = useRef(null);

    // Aplanamos todas las ubicaciones
    const allUbicaciones = SucursalData.flatMap((sucursal, sIndex) =>
        (sucursal.ubicaciones || [sucursal]).map((ubi, uIndex) => ({
            ...ubi,
            sucursalTitulo: sucursal.titulo,
            descripcion: sucursal.descripcion,
            logo: sucursal.logo,
            color: sucursal.color,
            direccion: ubi.direccion || sucursal.direccion?.[0] || '',
            key: `${sIndex}-${uIndex}`,
        }))
    );

    // Mover mapa al seleccionar
    useEffect(() => {
        const selected = allUbicaciones[selectedIndex];
        if (mapRef.current && selected?.latLng) {
            mapRef.current.animateToRegion({
                latitude: selected.latLng[0],
                longitude: selected.latLng[1],
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }, 500);
        }
    }, [selectedIndex]);

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.logo} style={styles.logo} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.sucursalTitulo}</Text>
                <Text style={styles.direccion}>{item.direccion}</Text>
                <Text style={styles.estado}>🟢 Abierto</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header />
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: -26.8241,
                    longitude: -65.2226,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {allUbicaciones.map((ubi, index) => (
                    <Marker
                        key={ubi.key}
                        coordinate={{
                            latitude: ubi.latLng[0],
                            longitude: ubi.latLng[1],
                        }}
                        title={ubi.sucursalTitulo}
                        onPress={() => {
                            setSelectedIndex(index);
                            flatListRef.current.scrollToIndex({ index, animated: true });
                        }}
                    />
                ))}
            </MapView>

            <FlatList
                ref={flatListRef}
                data={allUbicaciones}
                renderItem={renderCard}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                snapToInterval={width * 0.9 + 10} // ancho de la card + margen
                snapToAlignment="start"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                style={styles.cardContainer}
                contentContainerStyle={{
                    paddingHorizontal: (width - width * 0.9) / 2, // centrado lateral
                }}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / (width * 0.9 + 10));
                    setSelectedIndex(index);
                }}
            />

            <BottomNavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    cardContainer: {
        position: 'absolute',
        bottom: 100,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 10,
        marginBottom: 10,
        padding: 12,
        flexDirection: 'row',
        width: width * 0.9,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    direccion: {
        color: '#555',
    },
    estado: {
        marginTop: 5,
        color: 'green',
        fontWeight: 'bold',
    },
});

export default UbicacionScreen;

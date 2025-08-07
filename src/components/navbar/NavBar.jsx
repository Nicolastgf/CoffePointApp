import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';

const BottomNavigationBar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: 'Home', icon: <Ionicons name="home-outline" size={26} /> },
        { name: 'Qr', icon: <MaterialIcons name="qr-code" size={26} /> },
        { name: 'Ubicacion', icon: <Ionicons name="location-outline" size={26} /> },
        { name: 'Regalo', icon: <AntDesign name="gift" size={26} /> },
        { name: 'User', icon: <Feather name="user" size={26} /> },
    ];

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.name}
                        onPress={() => setActiveTab(tab.name)}
                        style={styles.iconContainer}
                        activeOpacity={0.8}
                    >
                        <View style={styles.circleWrapper}>
                            <View
                                style={[
                                    styles.iconWrapper,
                                    {
                                        backgroundColor: activeTab === tab.name ? '#DF1A5D' : 'transparent',
                                    },
                                ]}
                            >
                                {React.cloneElement(tab.icon, {
                                    color: activeTab === tab.name ? '#fff' : '#000',
                                })}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 18,
        paddingHorizontal: 25,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 8,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleWrapper: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // ⚠️ Necesario en Android
        backgroundColor: 'transparent',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // ⚠️ Importante en Android para mantener circular
    },
});

export default BottomNavigationBar;

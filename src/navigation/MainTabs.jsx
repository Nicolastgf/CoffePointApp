import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from '../screen/HomeScreen';
import QrScreen from '../screen/QrScreen';
import UbicacionScreen from '../screen/UbicacionScreen';
import RegaloScreen from '../screen/RegaloScreen';
import UserScreen from '../screen/UserScreen';
import BottomNavigationBar from '../components/navbar/NavBar';

const MainTabs = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const renderScreen = () => {
        switch (activeTab) {
            case 'Qr':
                return <QrScreen />;
            case 'Ubicacion':
                return <UbicacionScreen />;
            case 'Regalo':
                return <RegaloScreen />;
            case 'User':
                return <UserScreen />;
            default:
                return <HomeScreen />;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {renderScreen()}
            <BottomNavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
};

export default MainTabs;

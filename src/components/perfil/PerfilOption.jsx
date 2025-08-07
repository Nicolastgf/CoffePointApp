import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PerfilOption = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.option} onPress={onPress}>
            <View style={styles.iconTextRow}>
                <Ionicons name={icon} size={20} color="#444" style={styles.icon} />
                <Text style={styles.label}>{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    iconTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});

export default PerfilOption;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.text}>AlrtBatcher</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        color: 'white'
    }
});

export default Header;
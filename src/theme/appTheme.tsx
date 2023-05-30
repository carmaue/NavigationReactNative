import React from 'react'
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,

    },
    buttonBig: {
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        marginRight: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonBigText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'

    },
});
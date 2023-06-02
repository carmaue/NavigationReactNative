import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab3Screen = () => {
    return (
        <View>
            <Text>Tab Screen 3</Text>
            {/* <Ionicons onPress={() => console.log('test')} name="car-sport-outline" size={52} color="green" style={{ color: 'green' }}>A</Ionicons> */}

            <TouchableIcon iconName='car-sport-outline' />
            <TouchableIcon iconName='home-outline' />
            <TouchableIcon iconName='leaf-outline' />
            <TouchableIcon iconName='airplane-outline' />
            <TouchableIcon iconName='golf-outline' />



        </View>
    )
}

import React from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../theme/appTheme';



export const TouchableIcon = ({ iconName }: any) => {
    return (
        <TouchableOpacity onPress={() => console.log(iconName)}>
            <Ionicons name={iconName} size={52} color={colors.primary}></Ionicons>
        </TouchableOpacity>
    )
}

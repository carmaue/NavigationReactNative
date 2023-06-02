import React, { useContext } from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';




export const TouchableIcon = ({ iconName }: any) => {
    const { changeFavIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
            <Ionicons name={iconName} size={52} color={colors.primary}></Ionicons>
        </TouchableOpacity>
    )
}

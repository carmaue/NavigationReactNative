import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { Button } from 'react-native';

export const Tab1Screen = () => {
    const { logOut, authState: { isLoggedIn } } = useContext(AuthContext);
    return (
        <View>
            <Text>Tab Screen 1 LogOUT</Text>
            {
                isLoggedIn &&
                <Button title='LogOut' onPress={logOut} />
            }

        </View>
    )
}

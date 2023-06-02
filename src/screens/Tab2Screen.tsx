import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const Tab2Screen = () => {
    const { signIn, authState } = useContext(AuthContext);
    return (
        <View>
            <Text style={styles.container}>Tab Screen 2</Text>
            {!authState.isLoggedIn ?
                (<Button buttonColor='red' textColor='white' onPress={signIn}>
                    Sign In
                </Button>
                ) :
                (<Text style={styles.buttonBig}>Actualmente estas Logeado</Text>)}
        </View>
    )
}

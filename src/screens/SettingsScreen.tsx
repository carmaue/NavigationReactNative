import { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';


export const SettingsScreen = () => {
    const { authState } = useContext(AuthContext);

    return (
        <View style={{ ...styles.container, flexDirection: 'column' }}>
            <Text style={{ ...styles.buttonBigText, marginBottom: 14 }}>SettingsScreen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View >
    )
}

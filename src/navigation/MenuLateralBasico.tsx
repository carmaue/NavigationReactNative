
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                drawerPosition: 'left',
                // drawerLabel: 'asa',
                // headerShown: true,
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Menu' }} component={StackNavigator} />
            <Drawer.Screen name="Tabs" options={{ title: 'Tabs' }} component={Tabs} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
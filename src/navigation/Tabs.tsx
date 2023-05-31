import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { colors } from '../theme/appTheme';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


export const Tabs = () => {

    return Platform.OS === 'ios' ? <TabsAndroid /> : <TabsAndroid />;

}


const Tab = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <Tab.Navigator
            // activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'Tab3Screen':
                            iconName = 'ST'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}>
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
            <Tab.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={Tab3Screen} />

        </Tab.Navigator>
    );
}
const BottomTabIOS = createBottomTabNavigator<RootTabScreen>();

type RootTabScreen = {
    Tab1Screen: undefined,
    Tab2Screen: undefined,
    Tab3Screen: undefined,
}

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'Tab3Screen':
                            iconName = 'ST'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
            <BottomTabIOS.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={Tab3Screen} />
        </BottomTabIOS.Navigator>
    );
}
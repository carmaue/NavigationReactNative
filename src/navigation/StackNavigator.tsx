import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen.tsx';


export type RootStackScreen = {
    Pagina1Screen: undefined,
    Pagina2Screen: {
        id: number,
        nombre: string,
    },
}
const Stack = createStackNavigator<RootStackScreen>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
            {/* <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    );
}
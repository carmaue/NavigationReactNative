import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootStackScreen } from '../navigation/StackNavigator'
import { AuthContext } from '../context/AuthContext'


interface Props extends StackScreenProps<RootStackScreen, 'Pagina2Screen'> { };

interface RouteParams {
    id: number,
    nombre: string,
}
export const Pagina2Screen = ({ route, navigation }: Props) => {


    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })

    }, [])


    const { changeUsername } = useContext(AuthContext);

    useEffect(() => {

        changeUsername(params.nombre);
    }, [])


    return (
        <View>
            <Text>{JSON.stringify(params, null, 3)}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Pagina1Screen')}>
                <Text>
                    Ir Pagina 1
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.popToTop()}>
                <Text>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>
                    Atras
                </Text>
            </TouchableOpacity>
        </View>
    )
}
